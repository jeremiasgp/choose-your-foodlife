export interface IHistoryModel {
    text: string;
    options: IHistoryOptions[];
    before?: {
        text: string;
        time: number;
    };
    after?: {
        text: string;
        time: number;
    };
}
export interface IHistoryOptions {
    label: string;
    money?: number;
    social?: number;
    days?: number;
    sentence?: string;
    time?: number;
}
export default {
    IHistoryModel: this.IHistoryModel,
}