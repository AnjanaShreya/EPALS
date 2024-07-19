import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/students.svg";
import { LightPurpleButton } from '../components/buttonStyles';
import Whatsapp from "../assets/whatsapp.jpeg";

const Homepage = () => {
    return (
        <StyledContainer>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <img src={Students} alt="students" style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <StyledPaper elevation={3}>
                        <StyledTitle>
                            <br></br>
                            Welcome to EPALS
                        </StyledTitle>
                        <StyledText>
                            Efficiently employee management system with streamlined organization and user-friendly access for employers and employees. Seamlessly schedule meeting schedules, chat with other employees, keeps track of progress and many other features.
                        </StyledText>
                        <StyledBox>
                            <StyledLink to="/choose">
                                <LightPurpleButton variant="contained" fullWidth>
                                    Login
                                </LightPurpleButton>
                            </StyledLink>
                            <StyledLink to="/chooseasguest">
                                <Button variant="outlined" fullWidth
                                    sx={{ mt: 2, mb: 3, color: "#7f56da", borderColor: "#7f56da" }}
                                >
                                    Login as Guest
                                </Button>
                            </StyledLink>
                            <StyledText>
                                Don't have an account?{' '}
                                <Link to="/Adminregister" style={{ color: "#550080" }}>
                                    Sign up
                                </Link>
                            </StyledText>
                            </StyledBox>
                        <StyledWhatsappLink href="https://wa.me/+916300643864" target="_blank">
                            <StyledWhatsapp src={Whatsapp} alt="whatsapp" />
                        </StyledWhatsappLink>
                    </StyledPaper>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default Homepage;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledPaper = styled.div`
  padding: 24px;
  height: 100vh;
  position: relative; /* Ensure relative positioning for absolute positioning of WhatsApp image */
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #252525;
  /* font-family: "Manrope"; */
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledText = styled.p`
  /* color: #550080; */
  margin-top: 70px;
  margin-bottom: 30px;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledWhatsapp = styled.img`
  position: absolute;
  top: 300 ;
  left: 150%;
  width: 80px; /* Adjust width as needed */
  height: auto; /* Maintain aspect ratio */
  margin-bottom: 10px; /* Adjust margin as needed */
`;

const StyledWhatsappLink = styled.a`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100px; /* Adjust width as needed */
  height: auto; /* Maintain aspect ratio */
  margin-bottom: 20px; /* Adjust margin as needed */
  z-index: 1; /* Ensure the link is clickable */
`;

