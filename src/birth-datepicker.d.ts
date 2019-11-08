
import Vue from "vue";

declare class vueBirthDatepicker extends Vue {
  value: number | string;
  valueIsstring: boolean;
  disabled: boolean;
  required: boolean;
  placeholder: string;
  attachment: string;
  wildcard: string;
  delimiter: string;
  yearFirst: boolean;
  closeOnSet: boolean;
  hideHeader: boolean;
  inline: boolean;
  high: boolean;
  locale: string | string[];
  minYear: number;
  maxYear: number;
  selectYear: number | boolean;

  isFilled: boolean;
  months: string[];
  valueTimestamp: number;
  attachmentX: vueBirthDatepicker.AttachX;
  attachmentY: vueBirthDatepicker.AttachY;
  dayStr: string;
  monthStr: string;
  valueStr: string;
  valueHeader: string;
}

export namespace vueBirthDatepicker {
  type AttachX = "right" | "left";
  type AttachY = "top" | "bottom";
}

export default vueBirthDatepicker;
