// // BookCard.js
// import React from 'react';
// import MediaCard from './MediaCard';
// import PropTypes from 'prop-types';
//
// export default function BookCard({
//                                      id,
//                                      title,
//                                      author,
//                                      type,
//                                      year,
//                                      rating = 0,
//                                      poster,
//                                      genres = []
//                                  }) {
//     return (
//         <MediaCard
//             id={id}
//             title={title}
//             author={author}
//             type={type}
//             year={year}
//             rating={rating}
//             cover={poster}
//             genres={genres}
//         />
//     );
// }
//
// BookCard.propTypes = {
//     id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//     title: PropTypes.string.isRequired,
//     author: PropTypes.string,
//     type: PropTypes.string,
//     year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     rating: PropTypes.number,
//     poster: PropTypes.string,
//     genres: PropTypes.arrayOf(PropTypes.string)
// };
//
// BookCard.defaultProps = {
//     author: '',
//     type: 'book',
//     year: '',
//     rating: 0,
//     poster: '',
//     genres: []
// };
