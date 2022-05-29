import React from 'react';
import styles from './ProductCard.module.scss';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className={styles.skeleton}
    speed={2}
    width={300}
    height={660}
    viewBox="0 0 300 660"
    backgroundColor="#f3f3f3"
    foregroundColor="#f3d8d2"
    {...props}>
    <circle cx="150" cy="142" r="142" />
    <rect x="10" y="308" rx="10" ry="10" width="280" height="28" />
    <rect x="10" y="345" rx="10" ry="10" width="280" height="100" />
    <rect x="10" y="485" rx="30" ry="30" width="280" height="45" />
    <rect x="10" y="540" rx="30" ry="30" width="280" height="45" />
    <rect x="10" y="610" rx="10" ry="10" width="70" height="40" />
    <rect x="140" y="605" rx="30" ry="30" width="150" height="50" />
  </ContentLoader>
);

export default Skeleton;
