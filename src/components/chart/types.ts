
export type LineChartDataType = {
    name: string,
    uv: number,
    pv: number
}

export type BarChartDataType = {
    name: string,
    v: number,
    color: string
}

export type PieChartDataType = {
    v: number,
    color: string,
    start: number,
    end: number
}