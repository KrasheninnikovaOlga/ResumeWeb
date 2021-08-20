import { iconSpinner10, iconBriefcase, iconLibrary } from "styles/_iconfont.scss";

const sections = [
        {
            title: "Resume Summary",
            iconCls: iconSpinner10,
            items: [
                {
                    title: "",
                    content: `IT Professional with over 10 years of direct experience in several enterprise solutions. Primarily I specialize on <b>ETL data processing, database design and implementation (OLTP, DWH, cubes)</b>,
and also have experience on developing ad-hoc, custom predefined <b>reports</b> based on relational databases and <b>analytical cubes</b>.
Also I have decent knowledge with Google BI stack (Dremel/F1, BigQuery, PLX).

Experienced with all stages of the development cycle for dynamic database projects.

I am strong <b>team player with high dedication and leadership</b>.

I am seeking for a position that will continually <b>challenge my problem solving, analytics and management skills</b>.
`               },
            ],
        },
        {
            title: "Experience",
            iconCls: iconBriefcase,
            items: [
                {
                    title: "UI software engineer",
                    period: {
                        startDate: new Date(2017, 2, 1),
                        endDate: null
                    },
                    content: `
Dremio <a target='_blank' href='https://www.dremio.com/'>https://www.dremio.com/</a> <br/>

Build a UI for big data application that handles millions of records. Improve user experience of the application. Consistently work on performance optimization, code quality improvement.

Ensure robustness and stability of a product by automation of integration tests.
`               },
                {
                    title: "Senior BI/Database Engineer",
                    period: {
                        startDate: new Date(2016, 3, 1),
                        endDate: new Date(2016, 8, 1),
                    },
                    content: `
Group M <br/>

Developed analytical system to enable users to perform their analytic against gathered data using MS BI solution, consisted of DWH, SSIS and SSAS cube. 

Participated in architecture sessions with a project SA to elaborate architecture and design of the solution.

Supported high standards of code quality for UI code base.
`               },
                {
                    title: "Senior BI/Database Engineer",
                    period: {
                        startDate: new Date(2015, 11, 1),
                        endDate: new Date(2016, 5, 1),
                    },
                    content: `
Chevron <br/>

Within a TIBCO Spotfire development environment, I designed business system for client, including dashboard that is consist of several visualizations unified with custom set of filters and navigation system for the soultion. 

Previous Power Pivot solution required to translate formulas in Excel PowerPivot (DAX) to MS SQL Server queries and Spotfire formulas.


`               },
                {
                    title: "Senior BI/Database Engineer",
                    period: {
                        startDate: new Date(2015, 9, 1),
                        endDate: new Date(2015, 11, 1),
                    },
                    content: `
Chevron <br/>

Built up an analytical platform using TIBCO Spotfire tool. 

I was responsible for all stages of developing the dashboard like the retrieving data, creating calculations, creating visualizations, drilling through logic for them and testing

`               },
                {
                    title: "BI/Database Engineer",
                    period: {
                        startDate: new Date(2012, 7, 1),
                        endDate: new Date(2015, 4, 1),
                    },
                    content: `
Chevron <br/>

Developed analytical reports using SSRS, integrating with existing SharePoint corporative portal and developing analytical cubes using SSAS
`               },
            ],
        },
        {
            title: "Education",
            iconCls: iconLibrary,
            items: [
                {
                    title: "Master of Science in Mathematical Analysis of Information Flows, N.G. Chernyshevsky Saratov State University",
                    period: {
                        startDate: new Date(2006, 8, 1),
                        endDate: new Date(20011, 7, 1),
                    },
                    content: `


Graduated summa cum laude.

Graduated a course of international communication (English).



`               },
{
    title: "Master of Science in Law, N.G. Chernyshevsky Saratov State University",
    period: {
        startDate: new Date(2008, 8, 1),
        endDate: new Date(20013, 7, 1),
    },
    },  
            ]
        },
    ];

export default sections