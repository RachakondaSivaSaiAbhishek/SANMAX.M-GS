// import React, { useState } from "react";
// import {
//   Pagination,
//   Card,
//   CardContent,
//   Button,
//   Grid,
//   Container,
// } from "@mui/material";
// import articleData from "./imgs/blogs.json";
// import { Launch } from "@mui/icons-material";
// // import "../App.css";
// // import Header from "./Header.js";

// const Articles = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const articlesPerPage = 9;

//   // Calculate the index range for the current page
//   const indexOfLastArticle = currentPage * articlesPerPage;
//   const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
//   const currentArticles = Object.entries(articleData).slice(
//     indexOfFirstArticle,
//     indexOfLastArticle
//   );

//   // Handle page change
//   const handlePageChange = (event, pageNumber) => {
//     setCurrentPage(pageNumber);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <>
//       {/* <Header /> */}

//       <Container maxWidth="xl" className="articles-container">
//         <div
//           className="articles-heading"
//           style={{ display: "flex", justifyContent: "center", padding: "20px" }}
//         >
//           <h1 style={{ color: "white" }}>Sanmax Blogs</h1>
//         </div>
//         <Grid container spacing={2} justifyContent="center">
//           {currentArticles.map(([title, article], index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <div className="card-container">
//                 <Card
//                   sx={{
//                     height: "360px",
//                     display: "flex",
//                     flexDirection: "column",
//                   }}
//                 >
//                   <CardContent>
//                     <h2>{title}</h2>
//                     <p>{article[0][0]}</p>
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       href={article[0][1]}
//                       endIcon={<Launch />}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Read More
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </div>
//             </Grid>
//           ))}
//         </Grid>

//         {/* Pagination */}
//         <div className="pagination-container">
//           {Object.entries(articleData).length > articlesPerPage && (
//             <Pagination
//               count={Math.ceil(
//                 Object.entries(articleData).length / articlesPerPage
//               )}
//               page={currentPage}
//               onChange={handlePageChange}
//               sx={{
//                 padding: "1rem",
//                 margin: "1rem",
//                 marginLeft: "auto",
//                 marginRight: "auto",
//                 maxWidth: "350px",
//                 "& .MuiPaginationItem-root": {
//                   color: "white",
//                 },
//                 "& .MuiPaginationItem-root.Mui-selected": {
//                   backgroundColor: "white",
//                   color: "black",
//                   "&:hover": {
//                     backgroundColor: "white",
//                     color: "black",
//                   },
//                 },
//               }}
//             />
//           )}
//         </div>
//       </Container>
//     </>
//   );
// };

// export default Articles;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Pagination,
  Card,
  CardContent,
  Button,
  Grid,
  Container,
} from "@mui/material";
import articleData from "./imgs/blogs.json";
import { Launch } from "@mui/icons-material";

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  // Calculate the index range for the current page
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = Object.entries(articleData).slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  // Handle page change
  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
        <Link to="/" style={{ position: "absolute", top: 0, left: 0, padding: "3rem" }}>
          <Button variant="outlined" color="primary" size="large">
            Home
          </Button>
        </Link>

      <Container maxWidth="xl" className="articles-container">
        <div
          className="articles-heading"
          style={{ display: "flex", justifyContent: "center", padding: "20px"  }}
        >
          <h1 style={{ color: "white" }}>Sanmax Mercado Blogs</h1>
        </div>
        <Grid container spacing={2} justifyContent="center">
          {currentArticles.map(([title, article], index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <div className="card-container">
                <Card
                  sx={{
                    height: "360px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent>
                    <h2>{title}</h2>
                    <p>{article[0][0]}</p>
                    <Button
                      variant="contained"
                      color="primary"
                      href={article[0][1]}
                      endIcon={<Launch />}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </Grid>
          ))}
        </Grid>

        {/* Pagination */}
        <div className="pagination-container">
          {Object.entries(articleData).length > articlesPerPage && (
            <Pagination
              count={Math.ceil(
                Object.entries(articleData).length / articlesPerPage
              )}
              page={currentPage}
              onChange={handlePageChange}
              sx={{
                padding: "1rem",
                margin: "1rem",
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "350px",
                "& .MuiPaginationItem-root": {
                  color: "white",
                },
                "& .MuiPaginationItem-root.Mui-selected": {
                  backgroundColor: "white",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                  },
                },
              }}
            />
          )}
        </div>
      </Container>
    </>
  );
};

export default Articles;
