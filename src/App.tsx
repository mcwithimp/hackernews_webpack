import React, { useState, ChangeEvent } from 'react';
import './App.css';

const DEFAULT_QUERY = 'redux';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';

type SearchProps = {
  value: string;
  onSearch: (value: string) => void;
};

const Search: React.FC<SearchProps> = ({ value, onSearch }: SearchProps) => {
  const onChange = (ev: ChangeEvent<HTMLInputElement>): void => {
    onSearch(ev.currentTarget.value);
  };

  return <input type="search" autoFocus value={value} onChange={onChange} />;
};

const List = ({ items, searchTerm }) => {
  return (
    <div>
      {items.map((it) => (
        <div key={it} style={{ fontWeight: it === searchTerm ? 'bold' : undefined }}>
          {it}
        </div>
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const onSearch = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <div>
      <Search value={searchTerm} onSearch={onSearch} />
      <List items={['Fred', 'Bob', 'Billy']} searchTerm={searchTerm} />
    </div>
  );
};

export default App;
