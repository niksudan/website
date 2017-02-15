import React from 'react';
import randomItem from 'random-item';
import './styles/Panel.css';

const Panel = ({ data }) => {
  const image = randomItem([
    'https://drscdn.500px.org/photo/170329905/q%3D80_m%3D1500/ff15cfdd40211445c5f0c7fba5bb8d85',
    'https://drscdn.500px.org/photo/187101707/q%3D80_m%3D2000/29bc1c4dc05822a9425b13b41947e36a',
    'https://drscdn.500px.org/photo/170160121/q%3D80_m%3D1500/79a4213dd106e74dabf984975909a39c',
    'https://drscdn.500px.org/photo/169988567/q%3D80_m%3D1500/a54bd7f9c0f25fdc2f02b5477c72819f',
    'https://drscdn.500px.org/photo/169622499/q%3D80_m%3D1500/ade980d78dc844a96ccf670e42585d14',
    'https://drscdn.500px.org/photo/169622445/q%3D80_m%3D1500/420b6b424e5b00a6ab4be7a8c5686aeb',
    'https://drscdn.500px.org/photo/168405491/q%3D80_m%3D1500/1713a77495950f2580d6eb3a7b8d60ae',
  ]);
  return (
    <div className="panel">
      <div className="panel__image" style={{
        backgroundImage: `url('${data.image ? data.image : image}')`
      }}></div>
      <div className="panel__content">
        <h4>{data.date}</h4>
        <h2>{data.name}</h2>
      </div>
    </div>
  );
};

export default Panel;
