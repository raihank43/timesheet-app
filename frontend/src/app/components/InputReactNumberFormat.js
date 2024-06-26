import * as React from "react";
import PropTypes from "prop-types";
import { NumericFormat } from "react-number-format";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";


const NumericFormatAdapter = React.forwardRef(function NumericFormatAdapter(
  props,
  ref
) {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      valueIsNumericString
      prefix="Rp"
      suffix="/jam"
    />
  );
});

NumericFormatAdapter.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function InputReactNumberFormat({ setRate }) {
  const [value, setValue] = React.useState("1320");
  return (
    <FormControl>
      <FormLabel>Rate</FormLabel>
      <Input
        value={value}
        onChange={(event) => setRate(event.target.value)}
        placeholder="Rate Karyawan per jam"
        slotProps={{
          input: {
            component: NumericFormatAdapter,
          },
        }}
      />
    </FormControl>
  );
}
