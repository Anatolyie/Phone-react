import { CiSearch } from 'react-icons/ci'

function SubHeader({ searchValue, setSearchValue }) {

  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  }

    return (
        <div className="content">
        <div className='content-item'>
            <h1 className='content-title'>{searchValue ? `Search by request: ${searchValue}` : 'All Articles'}</h1>
            <div className='content-search'>
              <CiSearch />
              <input 
                onChange={onChangeSearchValue}
                value={searchValue}
                type="text" 
                placeholder='search...'/>
            </div>
          </div>
        </div>
    );
}

export default SubHeader;