// import './App.css';
// import React, { Component } from 'react'
// import NavBar from './components/NavBar';
// import News from './components/News';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'

// export default class App extends Component {
//   pageSize = 5;
//   apikey=process.env.REACT_APP_NEWS_API

//   state = {
//     progress:0
//   }

//   setProgress = (progress)=>{
//     this.setState({progress:progress})
//   }
//   render() {
//     return (
//       <div>
//         <Router>
//           <NavBar />
//           <LoadingBar
//             height={3}
//             color='#f11946'
//             progress={this.state.progress}
//           />
//           <Routes>
//             <Route exact path="/" element={<News  setProgress={setProgress}   apikey={apikey}  key="general1" pageSize={pageSize} country='in' category='general' />} />
//             <Route exact path="/business" element={<News  setProgress={setProgress}   apikey={apikey}  key="business" pageSize={pageSize} country='in' category='business' />} />
//             <Route exact path="/entertainment" element={<News  setProgress={setProgress}   apikey={apikey}  key="entertainment" pageSize={pageSize} country='in' category='entertainment' />} />
//             <Route exact path="/general" element={<News  setProgress={setProgress}   apikey={apikey}  key="general" pageSize={pageSize} country='in' category='general' />} />
//             <Route exact path="/health" element={<News  setProgress={setProgress}   apikey={apikey}  key="health" pageSize={pageSize} country='in' category='health' />} />
//             <Route exact path="/science" element={<News  setProgress={setProgress}   apikey={apikey}  key="science" pageSize={pageSize} country='in' category='science' />} />
//             <Route exact path="/sports" element={<News  setProgress={setProgress}   apikey={apikey}  key="sports" pageSize={pageSize} country='in' category='sports' />} />
//             <Route exact path="/technology" element={<News  setProgress={setProgress}   apikey={apikey}  key="technology" pageSize={pageSize} country='in' category='technology' />} />
//           </Routes>

//         </Router>
//       </div>
//     );
//   }
// }














import './App.css';
// import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import React, {useState} from 'react';


  export default function App() {

  let pageSize = 5;
  let apikey=process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0);
  
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exact path="/" element={<News  setProgress={setProgress}   apikey={apikey}  key="general1" pageSize={pageSize} country='in' category='general' />} />
            <Route exact path="/business" element={<News  setProgress={setProgress}   apikey={apikey}  key="business" pageSize={pageSize} country='in' category='business' />} />
            <Route exact path="/entertainment" element={<News  setProgress={setProgress}   apikey={apikey}  key="entertainment" pageSize={pageSize} country='in' category='entertainment' />} />
            <Route exact path="/general" element={<News  setProgress={setProgress}   apikey={apikey}  key="general" pageSize={pageSize} country='in' category='general' />} />
            <Route exact path="/health" element={<News  setProgress={setProgress}   apikey={apikey}  key="health" pageSize={pageSize} country='in' category='health' />} />
            <Route exact path="/science" element={<News  setProgress={setProgress}   apikey={apikey}  key="science" pageSize={pageSize} country='in' category='science' />} />
            <Route exact path="/sports" element={<News  setProgress={setProgress}   apikey={apikey}  key="sports" pageSize={pageSize} country='in' category='sports' />} />
            <Route exact path="/technology" element={<News  setProgress={setProgress}   apikey={apikey}  key="technology" pageSize={pageSize} country='in' category='technology' />} />
          </Routes>

        </Router>
      </div>
    );
  
}
