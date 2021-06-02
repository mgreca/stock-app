import Button from '../../core/Button/Button';
import TextField from '../../core/TextField/TextField';

const StockHeader = () => {
  return (
    <div>
      <TextField label="Stock name"/>
      <div>
          <Button>Add</Button>
          <Button>But</Button>
          <Button>Sell</Button>
      </div>
    </div>
  );
};

export default StockHeader;
