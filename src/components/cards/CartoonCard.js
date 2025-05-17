// // CartoonCard.js (updated for consistency)
// import React from 'react';
// import MediaCard from './MediaCard';
// import PropTypes from 'prop-types';
//
// export default function CartoonCard({
//                                         id,
//                                         title,
//                                         year,
//                                         country,
//                                         type,
//                                         genres,
//                                         poster,
//                                         rating
//                                     }) {
//     return (
//         <MediaCard
//             id={id}
//             title={title}
//             year={year}
//             country={country}
//             type={type}
//             genres={genres}
//             poster={poster}
//             rating={rating}
//         />
//     );
// }
//
// CartoonCard.propTypes = {
//     id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//     title: PropTypes.string.isRequired,
//     year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     country: PropTypes.string,
//     type: PropTypes.string,
//     genres: PropTypes.arrayOf(PropTypes.string),
//     poster: PropTypes.string
// };
//
// CartoonCard.defaultProps = {
//     genres: [],
//     country: '',
//     type: 'cartoon',
//     year: ''
// };