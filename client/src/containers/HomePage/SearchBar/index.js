import { useState } from 'react';

import WideText from '../../../components/theme/input/WideText';
import SubmitButton from '../../../components/theme/input/SubmitButton';

const SearchBar = ({ searchValue, searchFunction }) => {
  const [searchQuery, setSearchQuery] = useState(searchValue);

  const onSerchSubmit = (e) => {
    e.preventDefault();
    searchFunction(searchQuery);
    setSearchQuery('');
  };

  return (
    <form onSubmit={onSerchSubmit} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <WideText type='text' placeholder='name, # permit, # license plate, etc' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value.trim())} />
      {searchQuery !== '' && (
        <>
          <div>
            <SubmitButton>Rechercher</SubmitButton>
          </div>
          {/* <Loading /> */}
        </>
      )}
    </form>
  );
};

export default SearchBar;
