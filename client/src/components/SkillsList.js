import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  tooltip: {
    fontSize: '15px'
  }
});

export const SkillsList = props => {
  const { classes } = props;

  return (
    <div>
      <Grid container spacing={2} justify='center' alignItems='center'>
        <Grid item xs={3} md={4}>
          <Tooltip classes={{ tooltip: classes.tooltip }} title='Html5'>
            <SvgIcon
              id='html5-svg'
              viewBox='0 0 768 768'
              style={{ width: '85px', height: '85px' }}
            >
              <path
                fill='#495057'
                d='M48 0h672l-61.12 690.016-275.616 77.984-274.048-78.016-61.216-689.984zM272.992 312l-7.424-86.976 321.888 0.096 7.36-83.904-421.632-0.096 22.336 256.32h292.032l-10.432 109.632-93.12 25.728-94.56-25.92-6.016-67.52h-83.488l10.56 133.472 173.504 46.4 172.128-46.176 23.808-261.024h-306.944z'
              ></path>
            </SvgIcon>
          </Tooltip>
        </Grid>

        <Grid item xs={3} md={4}>
          <Tooltip classes={{ tooltip: classes.tooltip }} title='CSS3'>
            <SvgIcon
              id='css3-svg'
              name=''
              viewBox='0 0 768 768'
              style={{ width: '85px', height: '85px' }}
            >
              <path
                fill='#495057'
                d='M114 36L89 165h524l-16 84H72L46 378h525l-29 147-212 70-183-70 13-64H31L0 616l303 116 350-116L768 36z'
              />
            </SvgIcon>
          </Tooltip>
        </Grid>

        <Grid item xs={3} md={4}>
          <Tooltip classes={{ tooltip: classes.tooltip }} title='Sass'>
            <SvgIcon
              id='sass-svg'
              viewBox='0 0 768 768'
              style={{ width: '85px', height: '85px' }}
            >
              <path
                fill='#495057'
                d='M384 0c212.064 0 384 171.936 384 384s-171.936 384-384 384-384-171.936-384-384 171.936-384 384-384zM307.68 511.936c5.6 20.64 4.992 39.936-0.768 57.344l-2.080 5.76c-0.768 1.952-1.664 3.84-2.496 5.632-4.48 9.28-10.432 17.92-17.76 25.92-22.336 24.288-53.504 33.504-66.88 25.76-14.4-8.384-7.232-42.72 18.688-70.080 27.872-29.376 67.84-48.288 67.84-48.288v-0.096l3.456-1.952zM624.832 164.384c-17.344-68.256-130.464-90.688-237.504-52.64-63.648 22.624-132.608 58.176-182.176 104.544-58.976 55.072-68.352 103.072-64.48 123.136 13.664 70.752 110.624 117.024 150.496 151.36v0.192c-11.744 5.76-97.792 48.928-117.952 93.6-21.6 47.040 3.36 80.672 19.68 84.96 50.4 13.952 102.24-11.52 130.080-52.768 26.88-40.352 24.512-92.192 12.928-117.632 15.872-4.32 34.56-6.24 58.56-3.328 67.232 7.68 80.672 49.92 77.76 67.2-2.88 17.248-16.736 27.328-21.568 30.208-4.8 2.912-6.24 3.84-5.792 5.792 0.48 2.88 2.912 2.88 6.72 2.4 5.28-0.96 35.072-14.4 36.512-47.072 1.44-41.28-37.952-87.328-108-86.4-28.8 0.512-47.072 2.912-60 8.192-0.96-1.44-1.952-2.4-3.36-3.36-43.2-46.56-123.36-79.2-120-141.12 0.96-22.56 9.12-82.048 153.6-154.048 118.56-59.072 213.152-42.72 229.472-6.72 23.456 51.328-50.432 146.88-173.792 160.768-47.040 5.28-71.52-12.928-77.792-19.68-6.688-7.2-7.648-7.68-10.048-6.208-3.84 1.92-1.44 8.16 0 12 3.84 9.6 18.72 26.4 44.672 35.040 22.528 7.2 77.76 11.488 144-14.4 74.368-28.768 132.448-108.96 115.648-176.16l2.336 2.144z'
              ></path>
            </SvgIcon>
          </Tooltip>
        </Grid>

        <Grid item xs={3} md={4}>
          <Tooltip classes={{ tooltip: classes.tooltip }} title='Material-UI'>
            <SvgIcon
              id='material-ui-svg'
              viewBox='0 0 600 600'
              style={{ width: '85px', height: '85px' }}
            >
              <path
                id='material-ui-svg1'
                d='m0 259.8v-259.8l225 129.9v86.6l-150-86.6v173.2z'
                fill='#495057'
              />
              <path
                id='material-ui-svg2'
                d='m225 129.9 225-129.9v259.8l-150 86.6-75-43.3 150-86.6v-86.6l-150 86.6z'
                fill='#495057'
              />
              <path
                id='material-ui-svg1'
                d='m225 303.1v86.6l150 86.6v-86.6z'
                fill='#495057'
              />
              <path
                id='material-ui-svg2'
                d='m375 476.3 225-129.9v-173.2l-75 43.3v86.6l-150 86.6zm150-346.4v-86.6l75-43.3v86.6z'
                fill='#495057'
              />
            </SvgIcon>
          </Tooltip>
        </Grid>

        <Grid item xs={3} md={4}>
          <Tooltip classes={{ tooltip: classes.tooltip }} title='Javascript'>
            <SvgIcon
              id='js-svg'
              viewBox='0 0 768 768'
              style={{ width: '85px', height: '85px' }}
            >
              <path
                fill='#495057'
                d='M0 0h768v768h-768v-768zM705.088 584.832c-5.6-35.040-28.416-64.48-96.096-91.936-23.552-11.040-49.728-18.72-57.504-36.48-2.912-10.56-3.36-16.32-1.472-22.56 4.8-20.672 29.28-26.88 48.48-21.12 12.48 3.84 24 13.44 31.232 28.8 33.088-21.632 33.088-21.632 56.16-36-8.64-13.44-12.928-19.232-18.752-24.96-20.16-22.56-47.008-34.080-90.688-33.088l-22.56 2.848c-21.632 5.28-42.24 16.8-54.72 32.16-36.48 41.312-25.952 113.312 18.208 143.072 43.68 32.64 107.552 39.808 115.712 70.56 7.68 37.44-27.84 49.44-62.912 45.12-25.952-5.76-40.32-18.752-56.16-42.752l-58.56 33.632c6.72 15.36 14.4 22.048 25.92 35.488 55.68 56.192 194.88 53.312 219.872-32.128 0.928-2.88 7.68-22.56 2.368-52.8l1.472 2.144zM417.632 352.992h-71.936c0 62.016-0.288 123.648-0.288 185.76 0 39.424 2.016 75.616-4.416 86.752-10.56 22.048-37.76 19.232-50.112 15.36-12.672-6.272-19.104-14.912-26.56-27.36-2.016-3.36-3.52-6.272-4.064-6.272l-58.4 36c9.76 20.16 24 37.504 42.368 48.544 27.36 16.32 64.128 21.6 102.624 12.96 25.056-7.232 46.656-22.112 57.952-45.152 16.32-29.76 12.864-66.24 12.704-107.072 0.384-65.728 0-131.488 0-197.728l0.128-1.792z'
              ></path>
            </SvgIcon>
          </Tooltip>
        </Grid>

        <Grid item xs={3} md={4}>
          <Tooltip classes={{ tooltip: classes.tooltip }} title='ES6'>
            <SvgIcon
              id='es6-svg'
              viewBox='0 0 250 250'
              style={{ width: '85px', height: '85px' }}
            >
              <path id='es6-svg1' fill='#495057' d='M0 0h256v256H0z' />
              <path
                id='es6-svg2'
                fill='#e6e6e6'
                d='M105.536 159.959h39.157v-10.653h-27.064v-16.507h24.953v-10.653h-24.953v-15.452h27.064V96.041h-39.157v63.918zm91.462-17.371c0-12.765-.864-15.548-18.043-19.675-11.037-2.687-11.229-2.879-11.229-10.173 0-5.566 1.44-7.294 9.598-7.294 5.566 0 11.804.768 17.083 1.92l1.344-10.173c-6.335-1.44-13.053-2.112-18.62-2.112-16.219 0-21.497 5.759-21.497 17.371 0 13.533 2.111 16.508 17.563 19.963 11.517 2.495 11.709 3.07 11.709 10.173 0 6.142-1.44 7.966-10.174 7.966-6.334 0-12.092-1.152-18.042-2.976l-2.112 9.502c4.223 2.015 12.669 3.839 19.963 3.839 18.906 0 22.457-6.239 22.457-18.331zm22.266-23.801c0-9.79 4.703-11.71 16.027-11.71 2.016 0 6.239.289 9.022.865l.768-9.79c-2.88-.671-7.486-1.151-11.037-1.151-17.467 0-26.489 5.374-26.489 22.265v23.322c0 11.037 3.263 18.33 19.77 18.33 15.068 0 19.675-7.485 19.675-17.466v-4.607c0-11.037-4.703-15.836-16.315-15.836-4.127 0-8.062.576-11.421 1.728v-5.95zm9.597 14.3c4.223 0 6.43 1.44 6.43 6.046v4.703c0 4.894-1.92 7.006-7.965 7.006-6.047 0-8.062-1.728-8.062-7.006v-8.734c2.687-1.152 6.142-2.015 9.597-2.015z'
              />
            </SvgIcon>
          </Tooltip>
        </Grid>

        <Grid item xs={3} md={4}>
          <Tooltip classes={{ tooltip: classes.tooltip }} title='React'>
            <SvgIcon
              id='react-svg'
              viewBox='0 0 768 768'
              style={{ width: '85px', height: '85px' }}
            >
              <path
                fill='#495057'
                d='M452.448 383.985c0 37.803-30.645 68.448-68.448 68.448s-68.448-30.645-68.448-68.448c0-37.803 30.645-68.448 68.448-68.448s68.448 30.645 68.448 68.448z'
              ></path>
              <path
                fill='#495057'
                d='M192.256 520.145l-15.104-3.84c-112.576-28.448-177.152-76.736-177.152-132.448s64.576-104 177.152-132.448l15.104-3.808 4.256 14.976c13.070 44.65 27.905 82.625 45.577 118.966l-1.961-4.47 3.232 6.816-3.232 6.816c-15.756 31.906-30.593 69.883-42.272 109.218l-1.345 5.278-4.256 14.944zM170.144 286.385c-85.568 24.032-138.080 60.8-138.080 97.472 0 36.64 52.512 73.408 138.080 97.472 12.281-38.876 25.107-71.151 39.892-102.316l-2.068 4.844c-12.749-26.356-25.575-58.631-36.266-91.864l-1.559-5.608zM575.744 520.145l-4.256-15.008c-13.048-44.61-27.894-82.575-45.596-118.892l1.948 4.428-3.232-6.816 3.232-6.816c15.743-31.889 30.589-69.864 42.293-109.192l1.355-5.303 4.256-14.976 15.136 3.808c112.544 28.448 177.12 76.736 177.12 132.48s-64.576 104-177.12 132.448l-15.136 3.84zM560.032 383.857c15.36 33.248 28.064 65.92 37.824 97.472 85.6-24.064 138.080-60.832 138.080-97.472 0-36.672-52.512-73.408-138.080-97.472-12.255 38.846-25.081 71.122-39.878 102.279l2.054-4.808z'
              ></path>
              <path
                fill='#495057'
                d='M169.92 286.225l-4.256-14.944c-31.648-111.552-22.048-191.488 26.336-219.392 47.456-27.392 123.648 4.96 203.488 86.912l10.88 11.168-10.88 11.168c-27.507 28.562-52.972 59.563-75.878 92.477l-1.626 2.468-4.32 6.176-7.52 0.64c-44.993 3.616-86.305 10.531-126.348 20.638l5.228-1.118-15.104 3.808zM230.592 74.065c-8.576 0-16.16 1.856-22.56 5.536-31.808 18.336-37.44 82.080-15.52 168.096 29.048-6.839 64.338-12.505 100.314-15.799l3.142-0.232c21.457-30.338 43.010-56.888 66.154-81.945l-0.49 0.537c-49.92-48.608-97.184-76.192-131.040-76.192zM537.44 725.649c-0.032 0-0.032 0 0 0-45.6 0-104.16-34.336-164.928-96.736l-10.88-11.168 10.88-11.168c27.497-28.567 52.952-59.578 75.844-92.503l1.627-2.473 4.32-6.176 7.488-0.64c45.001-3.595 86.338-10.5 126.404-20.603l-5.221 1.115 15.104-3.808 4.288 14.976c31.584 111.488 22.016 191.456-26.368 219.328-10.78 6.204-23.705 9.863-37.485 9.863-0.378 0-0.755-0.003-1.132-0.008l0.057 0.001zM406.368 617.457c49.92 48.608 97.184 76.192 131.040 76.192h0.032c8.544 0 16.16-1.856 22.528-5.536 31.808-18.336 37.472-82.112 15.52-168.128-29.076 6.853-64.378 12.518-100.368 15.803l-3.12 0.23c-21.428 30.355-42.972 56.915-66.118 81.973l0.486-0.533z'
              ></path>
              <path
                fill='#495057'
                d='M598.080 286.225l-15.104-3.808c-34.865-9.022-76.202-15.939-118.529-19.348l-2.654-0.172-7.488-0.64-4.32-6.176c-24.502-35.387-49.958-66.389-77.695-95.176l0.223 0.233-10.88-11.168 10.88-11.168c79.808-81.92 155.968-114.272 203.488-86.912 48.384 27.904 57.984 107.84 26.368 219.36l-4.288 14.976zM472 231.665c36.544 3.328 71.264 8.736 103.488 16.032 21.952-86.016 16.288-149.76-15.52-168.096-31.616-18.272-91.040 9.728-153.6 70.656 22.641 24.517 44.183 51.067 63.974 78.947l1.659 2.462zM230.592 725.649c-0.329 0.005-0.717 0.008-1.106 0.008-13.78 0-26.705-3.66-37.857-10.060l0.371 0.196c-48.384-27.872-57.984-107.808-26.336-219.328l4.224-14.976 15.104 3.808c36.96 9.312 77.728 15.872 121.12 19.488l7.52 0.64 4.288 6.176c24.539 35.393 50.003 66.404 77.735 95.216l-0.23-0.241 10.88 11.168-10.88 11.168c-60.736 62.4-119.296 96.736-164.832 96.736zM192.512 519.985c-21.952 86.016-16.288 149.792 15.52 168.128 31.584 18.016 90.976-9.76 153.6-70.656-22.636-24.527-44.188-51.086-63.998-78.969l-1.666-2.471c-39.094-3.511-74.385-9.176-108.827-17.068l5.371 1.036z'
              ></path>
              <path
                fill='#495057'
                d='M384 540.081c-26.336 0-53.408-1.152-80.512-3.392l-7.52-0.64-4.32-6.176c-13.064-18.425-27.342-40.587-40.72-63.342l-2.48-4.561c-10.859-18.191-23.299-41.558-34.788-65.467l-2.524-5.828-3.2-6.816 3.2-6.816c14.007-29.73 26.447-53.097 39.789-75.872l-2.477 4.575c13.248-22.912 27.808-45.76 43.2-67.904l4.32-6.176 7.52-0.64c24.123-2.171 52.181-3.408 80.528-3.408s56.406 1.238 84.125 3.662l-3.596-0.254 7.488 0.64 4.288 6.176c28.238 39.981 55.067 85.611 78.049 133.438l2.495 5.762 3.232 6.816-3.232 6.816c-25.39 53.557-52.221 99.191-82.542 142.188l1.998-2.988-4.288 6.176-7.488 0.64c-27.104 2.24-54.208 3.392-80.544 3.392zM313.696 505.393c47.36 3.552 93.248 3.552 140.64 0 24.092-34.688 47.479-74.503 67.849-116.065l2.423-5.471c-22.723-46.993-46.122-86.811-72.29-124.565l1.986 3.029c-21.045-1.697-45.562-2.664-70.304-2.664s-49.258 0.968-73.512 2.866l3.208-0.202c-24.202 34.734-47.602 74.553-67.927 116.149l-2.377 5.387c22.823 47.040 46.219 86.854 72.335 124.644l-2.032-3.108z'
              ></path>
            </SvgIcon>
          </Tooltip>
        </Grid>

        <Grid item xs={3} md={4}>
          <Tooltip classes={{ tooltip: classes.tooltip }} title='Redux'>
            <SvgIcon
              id='redux-svg'
              viewBox='0 0 768 768'
              style={{ width: '85px', height: '85px' }}
            >
              <path
                fill='#495057'
                d='M532.256 528.128c27.808-2.4 49.376-26.88 47.968-56.128-1.472-29.248-25.44-52.736-54.656-52.736h-1.952c-30.176 0.992-53.696 26.368-52.736 56.608 0.96 15.328 7.232 27.808 15.808 36.896-33.536 65.216-83.872 113.152-160.128 153.44-51.296 26.816-105.472 36.928-158.208 29.728-44.096-6.208-78.592-25.919-99.712-57.536-31.616-47.968-34.496-99.712-8.16-151.488 19.232-37.408 47.968-64.736 67.168-78.176-4.8-12.448-10.56-33.536-13.44-49.344-141.952 101.664-127.52 240.672-84.384 306.369 32.128 47.936 97.824 78.592 169.728 78.592 19.168 0 39.328-1.408 58.976-6.208 124.672-23.968 219.104-98.752 273.28-209.024l0.448-0.992z'
              ></path>
              <path
                fill='#495057'
                d='M703.393 408.256c-74.272-87.264-183.616-135.2-308.288-135.2h-16.32c-8.096-17.728-26.784-28.768-47.904-28.768h-1.44c-30.176 0-53.696 25.919-52.704 56.096 0.96 28.736 25.407 52.736 54.656 52.736h2.368c21.6-0.96 40.288-14.4 47.936-33.568h17.76c73.888 0 143.84 21.568 207.616 63.744 48.864 32.128 83.905 74.304 103.552 124.672 17.216 41.216 16.288 81.504-1.44 115.104-27.328 52.704-73.376 80.544-134.24 80.544-38.368 0-75.744-12-94.944-20.608-11.488 9.536-30.688 25.376-44.608 34.976 42.176 19.136 84.864 30.176 126.080 30.176 93.504 0 162.976-52.704 189.376-103.552 28.736-57.536 26.368-154.368-47.008-237.312l-0.448 0.96z'
              ></path>
              <path
                fill='#495057'
                d='M207.68 545.344c0.928 28.768 25.376 52.736 54.656 52.736h1.921c30.688-0.96 54.176-26.336 52.736-56.576 0-28.768-24.928-52.704-54.176-52.704h-1.952c-1.921 0-4.768 0-7.2 0.928-39.776-67.136-56.575-139.072-50.304-216.672 3.808-58.496 23.008-109.344 57.504-151.52 28.768-35.968 82.944-53.728 119.872-54.656 103.552-1.952 146.72 127.072 150.047 178.368l47.936 14.368c-11.040-157.248-108.8-239.744-202.304-239.744-87.744 0-168.736 63.776-201.376 157.28-44.577 124.672-15.328 244.512 39.328 340.416-4.768 6.24-7.648 17.248-6.688 27.776z'
              ></path>
            </SvgIcon>
          </Tooltip>
        </Grid>

        <Grid item xs={3} md={4}>
          <Tooltip classes={{ tooltip: classes.tooltip }} title='React-Router'>
            <SvgIcon
              id='react-router-svg'
              viewBox='0 -75 260 260'
              style={{ width: '85px', height: '85px' }}
            >
              <path
                id='react-router-svg1'
                fill='#495057'
                d='M78.0659341,92.5875806 C90.8837956,92.5875806 101.274726,82.1966508 101.274726,69.3787894 C101.274726,56.5609279 90.8837956,46.1699982 78.0659341,46.1699982 C65.2480726,46.1699982 54.8571429,56.5609279 54.8571429,69.3787894 C54.8571429,82.1966508 65.2480726,92.5875806 78.0659341,92.5875806 Z M23.2087913,139.005163 C36.0266526,139.005163 46.4175825,128.614233 46.4175825,115.796372 C46.4175825,102.97851 36.0266526,92.5875806 23.2087913,92.5875806 C10.3909298,92.5875806 0,102.97851 0,115.796372 C0,128.614233 10.3909298,139.005163 23.2087913,139.005163 Z M232.791209,139.005163 C245.60907,139.005163 256,128.614233 256,115.796372 C256,102.97851 245.60907,92.5875806 232.791209,92.5875806 C219.973347,92.5875806 209.582418,102.97851 209.582418,115.796372 C209.582418,128.614233 219.973347,139.005163 232.791209,139.005163 Z'
              ></path>
              <path
                id='react-router-svg2'
                fill='#495057'
                d='M156.565464,70.3568084 C155.823426,62.6028163 155.445577,56.1490255 149.505494,51.6131676 C141.982638,45.8687002 133.461166,49.5960243 122.964463,45.8072968 C112.650326,43.3121427 105,34.1545727 105,23.2394367 C105,10.4046502 115.577888,0 128.626373,0 C138.29063,0 146.599638,5.70747659 150.259573,13.8825477 C155.861013,24.5221258 152.220489,35.3500418 159.258242,40.8041273 C167.591489,47.2621895 178.826167,42.5329154 191.362109,48.6517412 C195.390112,50.5026944 198.799584,53.4384578 201.202056,57.0769224 C203.604528,60.7153869 205,65.0565524 205,69.7183101 C205,80.633446 197.349674,89.7910161 187.035538,92.2861702 C176.538834,96.0748977 168.017363,92.3475736 160.494506,98.092041 C152.03503,104.551712 156.563892,115.358642 149.669352,126.774447 C145.756163,134.291567 137.802119,139.43662 128.626373,139.43662 C115.577888,139.43662 105,129.03197 105,116.197184 C105,106.873668 110.581887,98.832521 118.637891,95.1306146 C131.173833,89.0117889 142.408511,93.7410629 150.741758,87.2830007 C155.549106,83.5574243 156.565464,77.8102648 156.565464,70.3568084 Z'
              ></path>
            </SvgIcon>
          </Tooltip>
        </Grid>

        <Grid item xs={3} md={4}>
          <Tooltip classes={{ tooltip: classes.tooltip }} title='Webpack'>
            <SvgIcon
              id='webpack-svg'
              viewBox='0 0 295 295'
              style={{ width: '85px', height: '85px' }}
            >
              <path
                id='webpack-svg1'
                fill='#495057'
                d='M233.153208,212.286792 L132.250566,269.427925 L132.250566,224.990189 L195.139623,190.357736 L233.153208,212.286792 Z M240.060377,206.055849 L240.060377,86.6535849 L203.157736,107.954717 L203.157736,184.754717 L240.060377,206.055849 Z M22.4603774,212.286792 L123.363019,269.379623 L123.363019,224.941887 L60.4739623,190.357736 L22.4603774,212.286792 L22.4603774,212.286792 Z M15.5532075,206.055849 L15.5532075,86.6535849 L52.4558491,107.954717 L52.4558491,184.754717 L15.5532075,206.055849 L15.5532075,206.055849 Z M19.8520755,78.925283 L123.363019,20.3833962 L123.363019,63.3720755 L57.0445283,99.84 L56.5132075,100.129811 L19.8520755,78.925283 L19.8520755,78.925283 Z M235.713208,78.925283 L132.250566,20.3833962 L132.250566,63.3720755 L198.520755,99.8883019 L199.052075,100.178113 L235.713208,78.925283 L235.713208,78.925283 Z'
              ></path>
              <path
                id='webpack-svg2'
                fill='#495057'
                d='M123.363019,214.846792 L61.3433962,180.697358 L61.3433962,113.123019 L123.363019,148.914717 L123.363019,214.846792 L123.363019,214.846792 Z M132.250566,214.846792 L194.270189,180.74566 L194.270189,113.123019 L132.250566,148.914717 L132.250566,214.846792 Z M65.4973585,105.298113 L127.806792,71.0520755 L190.067925,105.298113 L127.806792,141.234717 L65.4973585,105.298113 L65.4973585,105.298113 Z'
              ></path>
            </SvgIcon>
          </Tooltip>
        </Grid>

        <Grid item xs={3} md={4}>
          <Tooltip classes={{ tooltip: classes.tooltip }} title='Git'>
            <SvgIcon
              id='git-svg'
              viewBox='0 0 768 768'
              style={{ width: '85px', height: '85px' }}
            >
              <path
                fill='#495057'
                d='M753.472 349.76l-335.328-335.296c-19.328-19.296-50.624-19.296-70.016 0l-69.472 69.6 88.32 88.32c20.64-6.88 44.128-2.24 60.448 14.112 16.512 16.48 21.056 40.256 14.016 60.8l85.056 85.12c20.64-7.136 44.384-2.496 60.8 13.92 23.072 23.040 23.072 60.288 0 83.328-23.008 23.008-60.192 23.008-83.2 0-17.248-17.312-21.568-42.784-12.928-63.872l-79.648-79.232v208.8c5.632 2.752 10.944 6.496 15.616 11.136 22.816 23.072 22.816 60.256 0 83.2-23.008 23.072-60.448 23.072-83.488 0-23.008-23.008-23.008-60.128 0-83.136 5.824-5.76 12.384-10.112 19.36-12.992v-210.848c-6.944-2.912-13.568-7.104-19.2-12.832-17.44-17.44-21.632-42.944-12.672-64.288l-86.784-87.2-229.952 229.792c-19.2 19.36-19.2 50.688 0 70.048l335.36 335.264c19.328 19.328 50.624 19.328 69.952 0l333.76-333.76c19.36-19.296 19.36-50.624 0-69.984z'
              ></path>
            </SvgIcon>
          </Tooltip>
        </Grid>

        <Grid item xs={3} md={4}>
          <Tooltip classes={{ tooltip: classes.tooltip }} title='Github'>
            <SvgIcon
              id='github-svg'
              viewBox='0 0 550 550'
              style={{ width: '85px', height: '85px' }}
            >
              <path
                fill='#495057'
                d='M256.004 6.321c-141.369 0-256.004 114.609-256.004 255.999 0 113.107 73.352 209.066 175.068 242.918 12.793 2.369 17.496-5.555 17.496-12.316 0-6.102-0.24-26.271-0.348-47.662-71.224 15.488-86.252-30.205-86.252-30.205-11.641-29.588-28.424-37.458-28.424-37.458-23.226-15.889 1.755-15.562 1.755-15.562 25.7 1.805 39.238 26.383 39.238 26.383 22.836 39.135 59.888 27.82 74.502 21.279 2.294-16.543 8.926-27.84 16.253-34.232-56.865-6.471-116.638-28.425-116.638-126.516 0-27.949 10.002-50.787 26.38-68.714-2.658-6.45-11.427-32.486 2.476-67.75 0 0 21.503-6.876 70.42 26.245 20.418-5.674 42.318-8.518 64.077-8.617 21.751 0.099 43.668 2.943 64.128 8.617 48.867-33.122 70.328-26.245 70.328-26.245 13.936 35.264 5.175 61.3 2.518 67.75 16.41 17.928 26.347 40.766 26.347 68.714 0 98.327-59.889 119.975-116.895 126.312 9.182 7.945 17.362 23.523 17.362 47.406 0 34.254-0.298 61.822-0.298 70.254 0 6.814 4.611 14.797 17.586 12.283 101.661-33.888 174.921-129.813 174.921-242.884 0-141.39-114.617-255.999-255.996-255.999z'
              ></path>
            </SvgIcon>
          </Tooltip>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(SkillsList);

// Done
