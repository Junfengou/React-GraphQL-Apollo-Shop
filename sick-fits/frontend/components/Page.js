import React, { Component } from "react";
import Header from "../components/Header";
import Meta from "../components/Meta";
import styled, { ThemeProvider, injectGlobal } from "styled-components";

//ThemeProvider is essentially a React Context API for styling. You create an variable and use it in any component in any level
// When using ThemeProvider, it is expected you to pass an theme={} object

//This is an object that contains all the css information which other components can refer to
//ThemeProvider must be imported, otherwise it will not work
const theme = {
	red: "#FF0000",
	black: "#393939",
	grey: "#3A3A3A",
	lightgrey: "#E1E1E1",
	offWhite: "#EDEDED",
	maxWidth: "1000px",
	bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
};

//Notice how the color is using props to access the theme black
const StyledPage = styled.div`
	background: white;
	color: ${(props) => props.theme.black};
`;

const Inner = styled.div`
	max-width: ${(props) => props.theme.maxWidth};
	margin: 0 auto;
	padding: 2rem;
`;

//When styling global style, don't use props to set color

injectGlobal`
@font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') 
    format('woff2');
    font-weight: normal;
    font-style: normal;
}

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  * , *:before, *:after{
    box-sizing: inherit; /** Best way to set up border box */
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2; 
    font-family: 'radnika_next';
  }

  a {
    text-decoration: none;
    color: ${theme.black}
  }
`;

class Page extends Component {
	render() {
		return (
			//Wrapping all the tags in theme so it will apply to everything
			<ThemeProvider theme={theme}>
				<StyledPage>
					<Meta />
					<Header />
					<Inner>{this.props.children}</Inner>
				</StyledPage>
			</ThemeProvider>
		);
	}
}

export default Page;
