// import React from "react";
// import Pagination from '@material-ui/lab/Pagination';
// function CustomPagination({setpage}){
//     const handlepagechange=(page) =>{
//         setpage(page);
//         window.scroll(0,0);
//     }
//     return <div style={{
//             width:"100%",
//             display:"flex",
//             justifyContent:"center",
//             marginTop:10,
            
//     }}>
//         <Pagination  
//         count={10} 
//         onchange={(e) => handlepagechange(e.target.textContent)}
//         variant="outlined" color="primary"
//         />
//     </div>
// }

// export default CustomPagination;

import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

export default function CustomPagination({ setPage, numOfPages = 10 }) {
  // Scroll to top when page changes
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 50,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          onChange={(e) => handlePageChange(e.target.textContent)}
          count={numOfPages}
          variant="outlined"
          color="#86C232"
        //   hideNextButton
        //   hidePrevButton
        />
      </ThemeProvider>
    </div>
  );
}