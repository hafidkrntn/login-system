import React, { useEffect } from 'react';
import Welcome from '../components/Welcome';
import Layout from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/loginSlice';


const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError } = useSelector((state) => state.login);

    useEffect(() =>{
      dispatch(getMe());
    },[dispatch]);

    useEffect(() =>{
      if(isError){
        navigate("/");
      }
    },[isError, navigate]);

    return (
      <Layout>
        <Welcome />
      </Layout>
    )
}

export default Dashboard