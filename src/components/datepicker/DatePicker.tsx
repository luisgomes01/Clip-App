import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { Label } from "../input/Input.styles";
import { Button, Text } from "./DatePicker.styles";

interface Props {
  value: Date;
  onChange: (value: Date) => void;
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

const DatePicker = ({
  value,
  onChange,
  label,
  containerStyle,
  ...otherProps
}: Props) => {
  // moving this logic to the context soon
  const [show, setShow] = useState(false);

  const handleChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    onChange(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View style={containerStyle}>
      {label && (
        <Label style={{ fontFamily: "montserrat-semibold" }}>{label}</Label>
      )}
      <Button onPress={showDatepicker}>
        <Text>{value.toLocaleDateString()}</Text>
      </Button>
      {show && (
        <DateTimePicker
          value={value}
          onChange={handleChange}
          mode="date"
          is24Hour
          {...otherProps}
        />
      )}
    </View>
  );
};

export default DatePicker;
