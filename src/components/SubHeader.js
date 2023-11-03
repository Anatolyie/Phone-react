

function SubHeader({ searchValue, setSearchValue }) {

  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  }

    return (
        <div className="content">
        <div className='content-item'>
            <h1 className='content-title'>{searchValue ? `Poisk po zaprosu: ${searchValue}` : 'All Articles'}</h1>
            <div className='content-search'>
              <img src="/img/search.svg" alt="search" />
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