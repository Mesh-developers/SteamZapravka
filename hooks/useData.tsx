import { Batch } from "@/typings";
import useSWR from "swr";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useData(key: string|any[], ids: number[], getData?: (data: Batch[])=>Batch[], isVoucher=true) {

    const { data } = useSWR<Batch[]>(key, () => fetch(isVoucher ? "https://api.steamzapravka.io/vouchers/batch" : "https://api.steamzapravka.io/topup/batch", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            productIds: ids
        })
    }).then(res=>res.json()).then((data: Batch[])=> getData ? getData(data) : data), { refreshInterval: isVoucher ? 30 * 60 * 1000 : 15 * 60 * 1000 })

    return {
        data
    }
}