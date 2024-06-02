import React, { FC } from 'react';
import './Detail.scss';

interface DetailProps {
  tags: string[];
  title: string;
  description: string;
}

const Detail: FC<DetailProps> = ({tags, title, description}) => {
  return (
    <div className="Detail">
        {
          <div className='container'>
            <p className='title'>{title}: {description}</p>
            <div className='tags-container'>{tags.map(x => <p className='tag'>{x}</p>)}</div>
          </div>
        }
    </div>
  );

};

export default Detail;
