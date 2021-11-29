import React, {useEffect,useState} from 'react';
import { Tree } from 'primereact/tree';
import { Button } from 'primereact/button';

export const GeographyTree = (props) => {

    const UNM49Codelist_Regions = [ "UNM49:001","UNM49:002","UNM49:015","UNM49:202","UNM49:014","UNM49:017","UNM49:018","UNM49:011","UNM49:019","UNM49:419","UNM49:029","UNM49:013",
                                    "UNM49:005","UNM49:021","UNM49:010","UNM49:142","UNM49:143","UNM49:030","UNM49:035","UNM49:034","UNM49:145","UNM49:150","UNM49:151","UNM49:154",
                                    "UNM49:830","UNM49:039","UNM49:155","UNM49:009","UNM49:053","UNM49:054","UNM49:057","UNM49:061" ];

    const UNM49Codelist_Countries = [ "UNM49:012","UNM49:004","UNM49:248","UNM49:008","UNM49:016","UNM49:020","UNM49:024","UNM49:660","UNM49:010","UNM49:028","UNM49:032","UNM49:051","UNM49:533","UNM49:036","UNM49:040","UNM49:031",
                                      "UNM49:044","UNM49:048","UNM49:050","UNM49:052","UNM49:112","UNM49:056","UNM49:084","UNM49:204","UNM49:060","UNM49:064","UNM49:068","UNM49:535","UNM49:070","UNM49:072","UNM49:074","UNM49:076",
                                      "UNM49:086","UNM49:092","UNM49:096","UNM49:100","UNM49:854","UNM49:108","UNM49:132","UNM49:116","UNM49:120","UNM49:124","UNM49:136","UNM49:140","UNM49:148","UNM49:152","UNM49:156","UNM49:344",
                                      "UNM49:446","UNM49:162","UNM49:166","UNM49:170","UNM49:174","UNM49:178","UNM49:184","UNM49:188","UNM49:384","UNM49:191","UNM49:192","UNM49:531","UNM49:196","UNM49:203","UNM49:408","UNM49:180",
                                      "UNM49:208","UNM49:262","UNM49:212","UNM49:214","UNM49:218","UNM49:818","UNM49:222","UNM49:226","UNM49:232","UNM49:233","UNM49:748","UNM49:231","UNM49:238","UNM49:234","UNM49:242","UNM49:246",
                                      "UNM49:250","UNM49:254","UNM49:258","UNM49:260","UNM49:266","UNM49:270","UNM49:268","UNM49:276","UNM49:288","UNM49:292","UNM49:300","UNM49:304","UNM49:308","UNM49:312","UNM49:316","UNM49:320",
                                      "UNM49:831","UNM49:324","UNM49:624","UNM49:328","UNM49:332","UNM49:334","UNM49:336","UNM49:340","UNM49:348","UNM49:352","UNM49:356","UNM49:360","UNM49:364","UNM49:368","UNM49:372","UNM49:833",
                                      "UNM49:376","UNM49:380","UNM49:388","UNM49:392","UNM49:832","UNM49:400","UNM49:398","UNM49:404","UNM49:296","UNM49:414","UNM49:417","UNM49:418","UNM49:428","UNM49:422","UNM49:426","UNM49:430",
                                      "UNM49:434","UNM49:438","UNM49:440","UNM49:442","UNM49:450","UNM49:454","UNM49:458","UNM49:462","UNM49:466","UNM49:470","UNM49:584","UNM49:474","UNM49:478","UNM49:480","UNM49:175","UNM49:484",
                                      "UNM49:583","UNM49:492","UNM49:496","UNM49:499","UNM49:500","UNM49:504","UNM49:508","UNM49:104","UNM49:516","UNM49:520","UNM49:524","UNM49:528","UNM49:540","UNM49:554","UNM49:558","UNM49:562",
                                      "UNM49:566","UNM49:570","UNM49:574","UNM49:807","UNM49:580","UNM49:578","UNM49:512","UNM49:586","UNM49:585","UNM49:591","UNM49:598","UNM49:600","UNM49:604","UNM49:608","UNM49:612","UNM49:616",
                                      "UNM49:620","UNM49:630","UNM49:634","UNM49:410","UNM49:498","UNM49:638","UNM49:642","UNM49:643","UNM49:646","UNM49:652","UNM49:654","UNM49:659","UNM49:662","UNM49:663","UNM49:666","UNM49:670",
                                      "UNM49:882","UNM49:674","UNM49:678","UNM49:680","UNM49:682","UNM49:686","UNM49:688","UNM49:690","UNM49:694","UNM49:702","UNM49:534","UNM49:703","UNM49:705","UNM49:090","UNM49:706","UNM49:710",
                                      "UNM49:239","UNM49:728","UNM49:724","UNM49:144","UNM49:275","UNM49:729","UNM49:740","UNM49:744","UNM49:752","UNM49:756","UNM49:760","UNM49:762","UNM49:764","UNM49:626","UNM49:768","UNM49:772",
                                      "UNM49:776","UNM49:780","UNM49:788","UNM49:792","UNM49:795","UNM49:796","UNM49:798","UNM49:800","UNM49:804","UNM49:784","UNM49:826","UNM49:834","UNM49:581","UNM49:840","UNM49:850","UNM49:858",
                                      "UNM49:860","UNM49:548","UNM49:862","UNM49:704","UNM49:876","UNM49:732","UNM49:887","UNM49:894","UNM49:716" ];

    const world_geography = [
        {"key": "UNM49:001", "label": "World", "img": "fad fa-globe fa-lg"},
        {"key": "UNM49:002", "label": "Africa", "img": "fad fa-globe-africa fa-lg", "children": [
                {"key": "UNM49:015", "label": "Northern Africa", "children": [
                        {"key": "UNM49:012", "label": "Algeria", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:818", "label": "Egypt", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:434", "label": "Libya", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:504", "label": "Morocco", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:729", "label": "Sudan", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:788", "label": "Tunisia", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:732", "label": "Western Sahara", "img": "fad fa-flag-alt fa-lg"}
                    ]},
                {"key": "UNM49:202", "label": "Sub-Saharan Africa", "children": [
                        {"key": "UNM49:014", "label": "Eastern Africa", "children": [
                                {"key": "UNM49:086", "label": "British Indian Ocean Territory", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:108", "label": "Burundi", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:174", "label": "Comoros", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:262", "label": "Djibouti", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:232", "label": "Eritrea", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:231", "label": "Ethiopia", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:260", "label": "French Southern Territories", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:404", "label": "Kenya", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:450", "label": "Madagascar", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:454", "label": "Malawi", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:480", "label": "Mauritius", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:175", "label": "Mayotte", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:508", "label": "Mozambique", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:638", "label": "Réunion", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:646", "label": "Rwanda", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:690", "label": "Seychelles", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:706", "label": "Somalia", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:728", "label": "South Sudan", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:800", "label": "Uganda", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:834", "label": "United Republic of Tanzania", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:894", "label": "Zambia", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:716", "label": "Zimbabwe", "img": "fad fa-flag-alt fa-lg"}
                            ]},
                        {"key": "UNM49:017", "label": "Middle Africa", "children": [
                                {"key": "UNM49:024", "label": "Angola", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:120", "label": "Cameroon", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:140", "label": "Central African Republic", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:148", "label": "Chad", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:178", "label": "Congo", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:180", "label": "Democratic Republic of the Congo", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:226", "label": "Equatorial Guinea", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:266", "label": "Gabon", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:678", "label": "Sao Tome and Principe", "img": "fad fa-flag-alt fa-lg"}
                            ]},
                        {"key": "UNM49:018", "label": "Southern Africa", "children": [
                                {"key": "UNM49:072", "label": "Botswana", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:748", "label": "Eswatini", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:426", "label": "Lesotho", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:516", "label": "Namibia", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:710", "label": "South Africa", "img": "fad fa-flag-alt fa-lg"}
                            ]},
                        {"key": "UNM49:011", "label": "Western Africa", "children": [
                                {"key": "UNM49:204", "label": "Benin", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:854", "label": "Burkina Faso", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:132", "label": "Cabo Verde", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:384", "label": "Côte d’Ivoire", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:270", "label": "Gambia", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:288", "label": "Ghana", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:324", "label": "Guinea", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:624", "label": "Guinea-Bissau", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:430", "label": "Liberia", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:466", "label": "Mali", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:478", "label": "Mauritania", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:562", "label": "Niger", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:566", "label": "Nigeria", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:654", "label": "Saint Helena", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:686", "label": "Senegal", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:694", "label": "Sierra Leone", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:768", "label": "Togo", "img": "fad fa-flag-alt fa-lg"}
                            ]}
                    ]}
            ]},
        {"key": "UNM49:019", "label": "Americas", "img": "fad fa-globe-americas fa-lg", "children": [
                {"key": "UNM49:419", "label": "Latin America and the Caribbean", "children": [
                        {"key": "UNM49:029", "label": "Caribbean", "children": [
                                {"key": "UNM49:660", "label": "Anguilla", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:028", "label": "Antigua and Barbuda", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:533", "label": "Aruba", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:044", "label": "Bahamas", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:052", "label": "Barbados", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:535", "label": "Bonaire, Sint Eustatius and Saba", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:092", "label": "British Virgin Islands", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:136", "label": "Cayman Islands", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:192", "label": "Cuba", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:531", "label": "Curaçao", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:212", "label": "Dominica", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:214", "label": "Dominican Republic", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:308", "label": "Grenada", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:312", "label": "Guadeloupe", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:332", "label": "Haiti", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:388", "label": "Jamaica", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:474", "label": "Martinique", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:500", "label": "Montserrat", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:630", "label": "Puerto Rico", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:652", "label": "Saint Barthélemy", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:659", "label": "Saint Kitts and Nevis", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:662", "label": "Saint Lucia", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:663", "label": "Saint Martin (French Part)", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:670", "label": "Saint Vincent and the Grenadines", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:534", "label": "Sint Maarten (Dutch part)", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:780", "label": "Trinidad and Tobago", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:796", "label": "Turks and Caicos Islands", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:850", "label": "United States Virgin Islands", "img": "fad fa-flag-alt fa-lg"}
                            ]},
                        {"key": "UNM49:013", "label": "Central America", "children": [
                                {"key": "UNM49:084", "label": "Belize", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:188", "label": "Costa Rica", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:222", "label": "El Salvador", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:320", "label": "Guatemala", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:340", "label": "Honduras", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:484", "label": "Mexico", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:558", "label": "Nicaragua", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:591", "label": "Panama", "img": "fad fa-flag-alt fa-lg"}
                            ]},
                        {"key": "UNM49:005", "label": "South America", "children": [
                                {"key": "UNM49:032", "label": "Argentina", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:068", "label": "Bolivia (Plurinational State of)", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:074", "label": "Bouvet Island", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:076", "label": "Brazil", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:152", "label": "Chile", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:170", "label": "Colombia", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:218", "label": "Ecuador", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:238", "label": "Falkland Islands (Malvinas)", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:254", "label": "French Guiana", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:328", "label": "Guyana", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:600", "label": "Paraguay", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:604", "label": "Peru", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:239", "label": "South Georgia and the South Sandwich Islands", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:740", "label": "Suriname", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:858", "label": "Uruguay", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:862", "label": "Venezuela (Bolivarian Republic of)", "img": "fad fa-flag-alt fa-lg"}
                            ]},
                    ]},
                {"key": "UNM49:021", "label": "Northern America", "children": [
                        {"key": "UNM49:060", "label": "Bermuda", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:124", "label": "Canada", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:304", "label": "Greenland", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:666", "label": "Saint Pierre and Miquelon", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:840", "label": "United States of America", "img": "fad fa-flag-alt fa-lg"}
                    ]}
            ]},
        {"key": "UNM49:010", "label": "Antarctica", "img": "fad fa-globe fa-lg"},
        {"key": "UNM49:142", "label": "Asia", "img": "fad fa-globe-asia fa-lg", "children": [
                {"key": "UNM49:143", "label": "Central Asia", "children": [
                        {"key": "UNM49:398", "label": "Kazakhstan", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:417", "label": "Kyrgyzstan", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:762", "label": "Tajikistan", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:795", "label": "Turkmenistan", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:860", "label": "Uzbekistan", "img": "fad fa-flag-alt fa-lg"}
                    ]},
                {"key": "UNM49:030", "label": "Eastern Asia", "children": [
                        {"key": "UNM49:156", "label": "China", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:344", "label": "China, Hong Kong Special Administrative Region", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:446", "label": "China, Macao Special Administrative Region", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:408", "label": "Democratic People's Republic of Korea", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:392", "label": "Japan", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:496", "label": "Mongolia", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:410", "label": "Republic of Korea", "img": "fad fa-flag-alt fa-lg"}
                    ]},
                {"key": "UNM49:035", "label": "South-eastern Asia", "children": [
                        {"key": "UNM49:096", "label": "Brunei Darussalam", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:116", "label": "Cambodia", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:360", "label": "Indonesia", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:418", "label": "Lao People's Democratic Republic", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:458", "label": "Malaysia", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:104", "label": "Myanmar", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:608", "label": "Philippines", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:702", "label": "Singapore", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:764", "label": "Thailand", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:626", "label": "Timor-Leste", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:704", "label": "Viet Nam", "img": "fad fa-flag-alt fa-lg"}
                    ]},
                {"key": "UNM49:034", "label": "Southern Asia", "children": [
                        {"key": "UNM49:004", "label": "Afghanistan", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:050", "label": "Bangladesh", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:064", "label": "Bhutan", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:356", "label": "India", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:364", "label": "Iran (Islamic Republic of)", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:462", "label": "Maldives", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:524", "label": "Nepal", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:586", "label": "Pakistan", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:144", "label": "Sri Lanka", "img": "fad fa-flag-alt fa-lg"}
                    ]},
                {"key": "UNM49:145", "label": "Western Asia", "children": [
                        {"key": "UNM49:051", "label": "Armenia", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:031", "label": "Azerbaijan", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:048", "label": "Bahrain", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:196", "label": "Cyprus", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:268", "label": "Georgia", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:368", "label": "Iraq", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:376", "label": "Israel", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:400", "label": "Jordan", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:414", "label": "Kuwait", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:422", "label": "Lebanon", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:512", "label": "Oman", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:634", "label": "Qatar", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:682", "label": "Saudi Arabia", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:275", "label": "State of Palestine", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:760", "label": "Syrian Arab Republic", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:792", "label": "Turkey", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:784", "label": "United Arab Emirates", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:887", "label": "Yemen", "img": "fad fa-flag-alt fa-lg"}
                    ]}
            ]},
        {"key": "UNM49:150", "label": "Europe", "img": "fad fa-globe-europe fa-lg", "children": [
                {"key": "UNM49:151", "label": "Eastern Europe", "children": [
                        {"key": "UNM49:112", "label": "Belarus", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:100", "label": "Bulgaria", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:203", "label": "Czechia", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:348", "label": "Hungary", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:616", "label": "Poland", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:498", "label": "Republic of Moldova", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:642", "label": "Romania", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:643", "label": "Russian Federation", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:703", "label": "Slovakia", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:804", "label": "Ukraine", "img": "fad fa-flag-alt fa-lg"}
                    ]},
                {"key": "UNM49:154", "label": "Northern Europe", "children": [
                        {"key": "UNM49:248", "label": "Aland Islands", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:830", "label": "Channel Islands", "children": [
                                {"key": "UNM49:831", "label": "Guernsey", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:832", "label": "Jersey", "img": "fad fa-flag-alt fa-lg"},
                                {"key": "UNM49:680", "label": "Sark", "img": "fad fa-flag-alt fa-lg"}
                            ]},
                        {"key": "UNM49:208", "label": "Denmark", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:233", "label": "Estonia", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:234", "label": "Faroe Islands", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:246", "label": "Finland", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:352", "label": "Iceland", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:372", "label": "Ireland", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:833", "label": "Isle of Man", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:428", "label": "Latvia", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:440", "label": "Lithuania", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:578", "label": "Norway", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:744", "label": "Svalbard and Jan Mayen Islands", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:752", "label": "Sweden", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:826", "label": "United Kingdom of Great Britain and Northern Ireland", "img": "fad fa-flag-alt fa-lg"}
                    ]},
                {"key": "UNM49:039", "label": "Southern Europe", "children": [
                        {"key": "UNM49:008", "label": "Albania", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:020", "label": "Andorra", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:070", "label": "Bosnia and Herzegovina", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:191", "label": "Croatia", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:292", "label": "Gibraltar", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:300", "label": "Greece", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:336", "label": "Holy See", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:380", "label": "Italy", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:470", "label": "Malta", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:499", "label": "Montenegro", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:807", "label": "North Macedonia", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:620", "label": "Portugal", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:674", "label": "San Marino", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:688", "label": "Serbia", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:705", "label": "Slovenia", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:724", "label": "Spain", "img": "fad fa-flag-alt fa-lg"}
                    ]},
                {"key": "UNM49:155", "label": "Western Europe", "children": [
                        {"key": "UNM49:040", "label": "Austria", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:056", "label": "Belgium", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:250", "label": "France", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:276", "label": "Germany", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:438", "label": "Liechtenstein", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:442", "label": "Luxembourg", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:492", "label": "Monaco", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:528", "label": "Netherlands", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:756", "label": "Switzerland", "img": "fad fa-flag-alt fa-lg"}
                    ]}
            ]},
        {"key": "UNM49:009", "label": "Oceania", "img": "fad fa-globe fa-lg", "children": [
                {"key": "UNM49:053", "label": "Australia and New Zealand", "children": [
                        {"key": "UNM49:036", "label": "Australia", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:162", "label": "Christmas Island", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:166", "label": "Cocos (Keeling) Islands", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:334", "label": "Heard Island and McDonald Islands", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:554", "label": "New Zealand", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:574", "label": "Norfolk Island", "img": "fad fa-flag-alt fa-lg"}
                    ]},
                {"key": "UNM49:054", "label": "Melanesia", "children": [
                        {"key": "UNM49:242", "label": "Fiji", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:540", "label": "New Caledonia", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:598", "label": "Papua New Guinea", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:090", "label": "Solomon Islands", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:548", "label": "Vanuatu", "img": "fad fa-flag-alt fa-lg"}
                    ]},
                {"key": "UNM49:057", "label": "Micronesia", "children": [
                        {"key": "UNM49:316", "label": "Guam", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:296", "label": "Kiribati", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:584", "label": "Marshall Islands", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:583", "label": "Micronesia (Federated States of)", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:520", "label": "Nauru", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:580", "label": "Northern Mariana Islands", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:585", "label": "Palau", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:581", "label": "United States Minor Outlying Islands", "img": "fad fa-flag-alt fa-lg"}
                    ]},
                {"key": "UNM49:061", "label": "Polynesia", "children": [
                        {"key": "UNM49:016", "label": "American Samoa", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:184", "label": "Cook Islands", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:258", "label": "French Polynesia", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:570", "label": "Niue", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:612", "label": "Pitcairn", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:882", "label": "Samoa", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:772", "label": "Tokelau", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:776", "label": "Tonga", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:798", "label": "Tuvalu", "img": "fad fa-flag-alt fa-lg"},
                        {"key": "UNM49:876", "label": "Wallis and Futuna Islands", "img": "fad fa-flag-alt fa-lg"}
                    ]}
            ]}
    ];

    const [treeGeography, setTreeGeography] = useState([]);

    useEffect( () => {

    let newArr = [];
    //------------------
    let selected_regions = [];
    newArr = [...props.treeData.regions];
    newArr.forEach(obj => selected_regions.push(obj.voc_code))
    //------------------
    let selected_countries = [];
    newArr = [...props.treeData.countries]
    newArr.forEach(obj => selected_countries.push(obj.voc_code))
    //------------------
    let nonSelectedRegions = UNM49Codelist_Regions;
    selected_regions.forEach(value => nonSelectedRegions.splice(nonSelectedRegions.indexOf(value),1 ) );
    //------------------
    let nonSelectedCountries = UNM49Codelist_Countries;
    selected_countries.forEach(value => nonSelectedCountries.splice(nonSelectedCountries.indexOf(value),1 ) );
    //------------------------------------------------
    let geography = world_geography;
    //------------------
    const checkRegions = (node) => {
        for (let i = 0; i < node.length; i++) {
            if (node[i] && node[i].key) {
                if (nonSelectedRegions.includes(node[i].key)) {
                    delete node[i];
                } else {
                    if (node[i].children && node[i].children.length) {
                        checkRegions(node[i].children);
                    }
                }
            }
        }
    }
    //------------------
    checkRegions(geography);
    //------------------
    const checkCountries = (node) => {
        for (let i = 0; i < node.length; i++) {
            if (node[i] && node[i].key) {
                if (nonSelectedCountries.includes(node[i].key)) {
                    delete node[i];
                }else{
                    if (node[i].children && node[i].children.length) {
                        checkCountries(node[i].children);
                    }
                }
            }
        }
    }
    //------------------
    checkCountries(geography);
    //------------------
    setTreeGeography(geography);

    }, [])

    //------------------------------------------------
    const [expandedKeys, setExpandedKeys] = useState({});

    const expandAll = () => {
        let _expandedKeys = {};
        for (let node of treeGeography) {
            expandNode(node, _expandedKeys);
        }

        setExpandedKeys(_expandedKeys);
    }

    const collapseAll = () => {
        setExpandedKeys({});
    }

    const expandNode = (node, _expandedKeys) => {
        if (node && node.children && node.children.length) {
            _expandedKeys[node.key] = true;

            for (let child of node.children) {
                expandNode(child, _expandedKeys);
            }
        }
    }


    const nodeTemplate = node => {
        let label = "<span className={node.img}></span><span>{node.label}</span>";

        if (node.url) {
            label = <a href={node.url}>{node.label}</a>;
        }

        return (
            <div>
                <span className={node.img} style={{marginRight: "0.5rem"}}/>
                <span>{node.label}</span>
            </div>
        )

    }


    return (

        <div>
            <div className="p-mb-4">
                <Button type="button" icon="pi pi-plus" label="Expand All" onClick={expandAll} className="p-mr-2" />
                <Button type="button" icon="pi pi-minus" label="Collapse All" onClick={collapseAll} />
            </div>
            <Tree value={treeGeography}
                  expandedKeys={expandedKeys}
                  onToggle={e => setExpandedKeys(e.value)}
                  nodeTemplate={nodeTemplate} />
        </div>

    );
}
