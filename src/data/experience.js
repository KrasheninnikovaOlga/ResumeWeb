import { iconSpinner10, iconBriefcase, iconLibrary } from "styles/_iconfont.scss";

const sections = [
        {
            title: "Resume Summary",
            iconCls: iconSpinner10,
            items: [
                {
                    title: "",
                    content: `IT Professional with over 10 years of direct experience in several enterprise solutions. </br> Primarily I specialize on <b>ETL data processing, database design and implementation (OLTP, DWH, cubes)</b>,
and also have experience on developing ad-hoc, custom predefined <b>reports</b> based on relational databases and <b>analytical cubes</b>.
Also I have decent knowledge with Google BI stack (Dremel/F1, BigQuery, PLX).

Experienced with all stages of the development cycle for dynamic database projects.

I am strong <b>team player with high dedication and leadership</b>.

</br>
I am seeking for a position that will continually <b>challenge my problem solving, analytics and management skills</b>.
`               },
            ],
        },
        {
            title: "Experience",
            iconCls: iconBriefcase,
            items: [
                {
                    title: "Lead Business Intelligence Data Engineer",
                    period: {
                        startDate: new Date(2016, 11, 1),
                        endDate: null,
                    },
                    content: `
EPAM Systems on behalf of Google  <br/>

The project is consist of creation and support an MDM System integrated with Reltio and DnB tools.

I have been resposible for developing ETL flows using Pentaho and Replicator tools, maintaining Reltio rules and configuration.
Also I participated in migration of ETL solution from Pentaho to Replicator solution. 

Communicated with the customer on a regular basis to discuss all technical questions

</br>
<br><b>Technologies:</b></br>

APIs, Pentaho, Replicator, BigQuery, PLX, Reltio, MySQL, JSON
`               },
                {
                    title: "Lead Business Intelligence Data Engineer",
                    period: {
                        startDate: new Date(2016, 11, 1),
                        endDate: new Date(2017, 4, 1),
                    },
                    content: `
EPAM Systems on behalf of Group M <br/>

Taking part in hand over of Azure based solution that has been developed by 3rd part vendor. 

Testing and helping with adaptation process of the solution under the requirements. 

Sharing the knowledge with the rest of the team

</br>
<br><b>Technologies:</b></br>

Azure Cloud, MS SQL Server 2012 , SSIS 2012, T-SQL, Hive, JSON
`               },
                {
                    title: "Senior Business Intelligence Data Engineer",
                    period: {
                        startDate: new Date(2016, 9, 1),
                        endDate: new Date(2016, 11, 1),
                    },
                    content: `
EPAM Systems on behalf of Group M <br/>

Within a scope of this project ETL part of the solution has been renovated according to the new business requirements

</br>
<br><b>Technologies:</b></br>

MS SQL Server 2012 , SSIS 2012 , T-SQL
`               },
                {
                    title: "Senior Business Intelligence Data Engineer",
                    period: {
                        startDate: new Date(2016, 3, 1),
                        endDate: new Date(2016, 8, 1),
                    },
                    content: `
EPAM Systems on behalf of Group M<br/>

Developed analytical system to enable users to perform their analytic against gathered data using MS BI solution, consisted of DWH, SSIS and SSAS cube. 

Participated in architecture sessions with a project SA to elaborate architecture and design of the solution.

Supported high standards of code quality for UI code base.

</br>
<br><b>Technologies:</b></br>

MS SQL Server 2012 , SSIS 2012 , SSAS 2012, T-SQL, MDX
`               },
                {
                    title: "Senior Business Intelligence Data Engineer",
                    period: {
                        startDate: new Date(2015, 11, 1),
                        endDate: new Date(2016, 5, 1),
                    },
                    content: `
EPAM Systems on behalf of Chevron <br/>

Within a TIBCO Spotfire development environment, I designed business system for client, including dashboard that is consist of several visualizations unified with custom set of filters and navigation system for the soultion. 

Previous Power Pivot solution required to translate formulas in Excel PowerPivot (DAX) to MS SQL Server queries and Spotfire formulas.

</br>
<br><b>Technologies:</b></br>

MS SQL Server 2008 R2, T-SQL, TIBCO Spotfire, DAX
`               },
                {
                    title: "Senior Business Intelligence Data Engineer",
                    period: {
                        startDate: new Date(2015, 9, 1),
                        endDate: new Date(2015, 11, 1),
                    },
                    content: `
EPAM Systems on behalf of Chevron <br/>

Built up an analytical platform using TIBCO Spotfire tool. 

I was responsible for all stages of developing the dashboard like the retrieving data, creating calculations, creating visualizations, drilling through logic for them and testing

</br>
<br><b>Technologies:</b></br>

MS SQL Server 2008 R2, T-SQL, TIBCO Spotfire
`               },
                {
                    title: "Business Intelligence Data Engineer",
                    period: {
                        startDate: new Date(2012, 7, 1),
                        endDate: new Date(2015, 4, 1),
                    },
                    content: `
EPAM Systems on behalf of Chevron <br/>

Developed analytical reports using SSRS, integrating with existing SharePoint corporative portal and developing analytical cubes using SSAS

</br>
<br><b>Technologies:</b></br>

MS SQL Server 2008 R2, SSIS 2008 R2, SSAS 2008 R2, SSRS 2008 R2, T-SQL, MDX, C#, PL/SQL, VBA,MS SQL Server 2012 , SSIS 2012 , SSAS 2012 , SSRS 2012
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
    content: `
    `
    },  
            ]
        },
    ];

export default sections