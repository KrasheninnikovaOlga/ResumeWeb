import { iconTree, iconUserTie, iconFlag } from "styles/_iconfont.scss";

const skills = [
        {
            title: "Skills",
            iconCls: iconTree,
            skills: [
                {
                    name: "T-SQL, MDX",
                    grade: 5,
                },
                {
                    name: "MSSQL, BigQuery, MySQL, Dremel/F1, PLX",
                    grade: 5
                },
                {
                    name: "Pentaho, SSIS",
                    grade: 5
                },
                {
                    name: "SSRS, TIBCO Spotfire",
                    grade: 5
                },
                {
                    name: "SSAS",
                    grade: 4
                },
                {
                    name: "Azure SQL, Informatica",
                    grade: 3
                },
                {
                    name: "Python",
                    grade: 2
                }
            ]
        },
        {
            title: "Soft Skills",
            iconCls: iconUserTie,
            skills: [
                {
                    name: "Agile/SCRUM/Lean",
                    grade: 5,
                },
                {
                    name: "Communication",
                    grade: 4
                },
                {
                    name: "Leadership",
                    grade: 5
                },
                {
                    name: "Team work",
                    grade: 5
                },
            ]
        },
        {
            title: "Languages",
            iconCls: iconFlag,
            skills: [
                {
                    name: "English",
                    grade: 4,
                    gradeDesc: "Upper Intermediate"
                },
                {
                    name: "Russian",
                    grade: 5,
                    gradeDesc: "Native"
                }
            ]
        }
    ];

export default skills;