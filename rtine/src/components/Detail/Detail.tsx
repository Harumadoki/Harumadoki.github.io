import React, { FC } from 'react';
import './Detail.scss';

interface DetailProps {
  tags: string[];
  title: string;
}

const Detail: FC<DetailProps> = ({tags, title}) => {
  return (
    <div className="Detail">
        {
          <div className='container'>
            <p>{title}</p>
            <div className='tags-container'>{tags.map(x => <p className='tag'>{x}</p>)}</div>
          </div>
        }
    </div>
  );

};

export default Detail;
