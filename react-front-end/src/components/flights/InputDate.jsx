import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

const InputDate = ({selectedOption, departureDate, setDepartureDate, returnDate, setReturnDate}) => {
  
  const handleDepartureDate = (newValue) => {
    const formattedDate = dayjs(newValue).format('YYYY-MM-DD');
    if (returnDate && dayjs(formattedDate).isAfter(departureDate)) {
      alert('Return cannot be before the departure.');
      return;
    }
    console.log('Selected Departure Date:', formattedDate);
    setDepartureDate(formattedDate);
  };

  const handleReturnDate = (newValue) => {
    const formattedDate = dayjs(newValue).format('YYYY-MM-DD');
    if (departureDate && dayjs(formattedDate).isBefore(departureDate)) {
      alert('Return cannot be before the departure.');
      return;
    }
    console.log('Selected Return Date:', formattedDate);
    setReturnDate(formattedDate);
  };
  
  const maxSelectableDate = dayjs().add(10, 'month');

  const disablePast = true;
  return (
    <div className="flex py-3 px-[1rem] mb-1 justify-center text-center">
        <LocalizationProvider  dateAdapter={AdapterDayjs} label="Responsive Variant">
            <DatePicker label="Departure"  disablePast={disablePast} views={['month', 'day']} required 
              value={departureDate}
              onChange={handleDepartureDate}
              maxDate={maxSelectableDate}
            /> 

            <div className="flex-grow p-2"></div>

            {/* only shown if "Round Trip option is selected from input.jsx */}
          {selectedOption === 'Round Trip' && (
            <DatePicker label="Return" disablePast={disablePast} views={['month', 'day']}
            value={returnDate}
            onChange={handleReturnDate}
            maxDate={maxSelectableDate}
             />
          )}
        </LocalizationProvider>
    </div>
  );
};

export default InputDate;