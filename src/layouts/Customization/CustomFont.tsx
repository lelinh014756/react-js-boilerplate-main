import SubCard from '@components/Cards/SubCard';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import { fontFamily as fontStore } from '@redux/selector/customizationSelector';
import { setFontFamily as setFontFamilyStore } from '@redux/slice/customizationSlice';
import { fontList } from '@shared/configs/themeConfig';
import { useCallback } from 'react';

const CustomFont = () => {
  const dispatch = useAppDispatch();

  const fontFamily = useAppSelector(fontStore);

  const changeFontFamily = useCallback((font: string) => {
    dispatch(setFontFamilyStore(font));
  }, []);

  return (
    <SubCard title="Font Family">
      <FormControl>
        <RadioGroup
          aria-label="font-family"
          value={fontFamily}
          onChange={(e) => {
            const { value } = e.target;

            changeFontFamily(value);
          }}
          name="row-radio-buttons-group"
        >
          {fontList.map((item) => (
            <FormControlLabel
              key={item.value}
              value={item.value}
              control={<Radio />}
              label={item.label}
              sx={(theme) => ({
                '& .MuiSvgIcon-root': { fontSize: 28 },
                '& .MuiFormControlLabel-label': {
                  color: theme.palette.grey[900],
                },
              })}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </SubCard>
  );
};

export default CustomFont;
