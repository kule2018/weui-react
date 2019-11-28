import React from "react";
import { dateFormatParse, daysInMonth } from "utils-dom";
import { Picker } from "../Picker";
import { PickerItem, PickerProps } from "../Picker/Picker";
import "./style/index.scss";

export interface DatePickerProps extends PickerProps {
    /**
     * 起始选择年
     * @example 2016
     */
    start?: number;
    /**
     * 结束选择年
     * @example 2030
     */
    end?: number;
}

export const today = new Date();
export const todayValue = [today.getFullYear(), today.getMonth(), today.getDate()];

export function createRange(start: number, end: number, suffix: string, createChildren?: (i: number) => PickerItem[]) {
    const data: PickerItem[] = [];
    for (let i = start; i <= end; ++i) {
        data.push({
            label: i + suffix,
            value: i,
            children: createChildren ? createChildren(i) : null,
        });
    }
    return data;
}

/**
 * 生成级联日期数据
 * @param start
 * @param end
 */
export function createCascadeDates(start: number, end: number): PickerItem[] {
    const data = createRange(start, end, "年");
    data.forEach((yearItem) => {
        const year = yearItem.value;
        yearItem.children = createRange(1, 12, "月", (month: number) => createRange(1, daysInMonth(dateFormatParse(`${year}-${month}-1`)), "日"));
    });
    return data;
}

function DatePicker(props: DatePickerProps) {
    const { start = today.getFullYear() - 20, end = today.getFullYear() + 30, ...rest } = props;
    return <Picker {...rest} value={props.value || todayValue} defaultValue={props.defaultValue || todayValue} data={createCascadeDates(start, end)} cascade={true} cols={3} />;
}

export default React.memo(DatePicker);