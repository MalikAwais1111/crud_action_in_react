import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './create.jsx';
import ThirdElement from './thirdelement';
import BlogDetails from './blogdetails.jsx';
import Layout from './layout.jsx';

function App(){
    return (
        <Router>
            <div className="container">
                <Layout>
                    <Routes>
                        <Route  path="/" element={<ThirdElement />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="/blogdetails/:id" element={<BlogDetails />} />
                    </Routes>
                </Layout>
            </div>
        </Router>
    );
}

export default App;
