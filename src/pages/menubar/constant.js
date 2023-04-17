import AcUnitIcon from "@mui/icons-material/AcUnit";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export const sidebarArr = [
    { label: "Home", route: "../" },
    { label: "Typography", route: "../typography" },
    {
        label: "Form Element",
        ExpandLess: ExpandLess,
        ExpandMore: ExpandMore,
        childs: [
            { label: "Button", route: "../button" },
            { label: "InputBox", route: "../inputbox" },
            { label: "Select Box", route: "../selectbox" },
            { label: "Otp Screen", route: "../otp" },
            { label: "UploadBox", route: "../uploadbox" },

            // {
            //   label: "Button",
            //   route: "../button",
            //   ExpandLess: ExpandLess,
            //   ExpandMore: ExpandMore,
            //   childs: [
            //     { label: "Child Button", route: "../button" },
            //     {
            //       label: "Button",
            //       route: "../button",
            //       ExpandLess: ExpandLess,
            //       ExpandMore: ExpandMore,
            //       childs: [{ label: "Child Button", route: "../button" }],
            //     },
            //   ],
            // },
        ],
    },
    { label: "Loader", route: "../loader" },
    { label: "Snakebar", route: "../snakebar" },
    // { label: "Color", route: "../color" },
    { label: "Modal", route: "../Modal" },
    { label: "Tabs", route: "../tabs" },
    { label: "Example1", route: "../example" },
];
export const sidebarArr2 = [
    {
        "id": 175,
        "parentmenuid": 0,
        "title": "INTL TAX",
        "apipath": "https://taxindiainternational.com/",
        "apipathfilter": "/@From_Date/@To_Date",
        "seq": 0,
        "subMenuItems": []
    },
    {
        "id": 176,
        "parentmenuid": 0,
        "title": "CORP LAWS",
        "apipath": "https://tiolcorplaws.com/",
        "apipathfilter": "/@From_Date/@To_Date",
        "seq": 0,
        "subMenuItems": []
    },
    {
        "id": 159,
        "parentmenuid": 0,
        "title": "GST",
        "apipath": "",
        "apipathfilter": "",
        "seq": 1,
        "subMenuItems": [
            {
                "id": 280,
                "parentmenuid": 159,
                "title": "CGST",
                "apipath": "",
                "apipathfilter": "",
                "seq": 39,
                "subMenuItems": [
                    {
                        "id": 441,
                        "parentmenuid": 280,
                        "title": "Circulars",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/9/30/91/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/9/30/91/0/null/@From_Date/@To_Date",
                        "seq": 125,
                        "subMenuItems": []
                    },
                    {
                        "id": 442,
                        "parentmenuid": 280,
                        "title": "Act",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 126,
                        "subMenuItems": []
                    },
                    {
                        "id": 443,
                        "parentmenuid": 280,
                        "title": "Rules",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 127,
                        "subMenuItems": []
                    },
                    {
                        "id": 444,
                        "parentmenuid": 280,
                        "title": "Central Jurisdiction",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 128,
                        "subMenuItems": [
                            {
                                "id": 622,
                                "parentmenuid": 444,
                                "title": "Central List ",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 1,
                                "subMenuItems": []
                            },
                            {
                                "id": 623,
                                "parentmenuid": 444,
                                "title": "State List ",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 2,
                                "subMenuItems": []
                            }
                        ]
                    },
                    {
                        "id": 445,
                        "parentmenuid": 280,
                        "title": "Notifications",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 129,
                        "subMenuItems": [
                            {
                                "id": 624,
                                "parentmenuid": 445,
                                "title": "Removal of Difficulties ",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 3,
                                "subMenuItems": []
                            },
                            {
                                "id": 625,
                                "parentmenuid": 445,
                                "title": "CGST (Rates) Notifications-All ",
                                "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/9/30/95/25/null",
                                "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/9/30/95/25/null/@From_Date/@To_Date",
                                "seq": 4,
                                "subMenuItems": []
                            },
                            {
                                "id": 626,
                                "parentmenuid": 445,
                                "title": "CGST (Rules) Notifications-All ",
                                "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/9/30/95/26/null",
                                "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/9/30/95/26/null/@From_Date/@To_Date",
                                "seq": 5,
                                "subMenuItems": []
                            },
                            {
                                "id": 627,
                                "parentmenuid": 445,
                                "title": "CGST (Rates) Notification (Effective) ",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 6,
                                "subMenuItems": []
                            },
                            {
                                "id": 628,
                                "parentmenuid": 445,
                                "title": "CGST (Rules) Notification (Effective) ",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 7,
                                "subMenuItems": []
                            }
                        ]
                    },
                    {
                        "id": 450,
                        "parentmenuid": 280,
                        "title": "Forms",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 130,
                        "subMenuItems": []
                    },
                    {
                        "id": 451,
                        "parentmenuid": 280,
                        "title": "MISC",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 131,
                        "subMenuItems": []
                    },
                    {
                        "id": 452,
                        "parentmenuid": 280,
                        "title": "HSN Code",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 132,
                        "subMenuItems": [
                            {
                                "id": 629,
                                "parentmenuid": 452,
                                "title": "HSN Amendments Chapterwise",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 8,
                                "subMenuItems": []
                            },
                            {
                                "id": 630,
                                "parentmenuid": 452,
                                "title": "HSN Code and Item Name ",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 9,
                                "subMenuItems": []
                            }
                        ]
                    }
                ]
            },
            {
                "id": 281,
                "parentmenuid": 159,
                "title": "IGST",
                "apipath": "",
                "apipathfilter": "",
                "seq": 40,
                "subMenuItems": [
                    {
                        "id": 453,
                        "parentmenuid": 281,
                        "title": "Act",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 133,
                        "subMenuItems": []
                    },
                    {
                        "id": 454,
                        "parentmenuid": 281,
                        "title": "IGST Rules",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 134,
                        "subMenuItems": []
                    },
                    {
                        "id": 455,
                        "parentmenuid": 281,
                        "title": "Circulars",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/9/31/105/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/9/31/105/0/null/@From_Date/@To_Date",
                        "seq": 135,
                        "subMenuItems": []
                    },
                    {
                        "id": 456,
                        "parentmenuid": 281,
                        "title": "Customs",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 136,
                        "subMenuItems": [
                            {
                                "id": 631,
                                "parentmenuid": 456,
                                "title": "TARIFF NOTIFICATIONS",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 10,
                                "subMenuItems": []
                            },
                            {
                                "id": 632,
                                "parentmenuid": 456,
                                "title": "CIRCULARS",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 11,
                                "subMenuItems": []
                            }
                        ]
                    },
                    {
                        "id": 457,
                        "parentmenuid": 281,
                        "title": "Notifications",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 137,
                        "subMenuItems": [
                            {
                                "id": 633,
                                "parentmenuid": 457,
                                "title": "IGST (Rates) Notifications",
                                "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/9/31/107/33/null",
                                "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/9/31/107/33/null/@From_Date/@To_Date",
                                "seq": 12,
                                "subMenuItems": []
                            },
                            {
                                "id": 634,
                                "parentmenuid": 457,
                                "title": "IGST (Rules) Notifications",
                                "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/9/31/107/34/null",
                                "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/9/31/107/34/null/@From_Date/@To_Date",
                                "seq": 13,
                                "subMenuItems": []
                            },
                            {
                                "id": 635,
                                "parentmenuid": 457,
                                "title": "Effective IGST (Rule) Notifications",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 14,
                                "subMenuItems": []
                            },
                            {
                                "id": 636,
                                "parentmenuid": 457,
                                "title": "Effective IGST (Rates) Notifications",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 15,
                                "subMenuItems": []
                            }
                        ]
                    },
                    {
                        "id": 458,
                        "parentmenuid": 281,
                        "title": "Miscellaneous",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 138,
                        "subMenuItems": []
                    },
                    {
                        "id": 459,
                        "parentmenuid": 281,
                        "title": "SEZ",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 139,
                        "subMenuItems": []
                    }
                ]
            },
            {
                "id": 282,
                "parentmenuid": 159,
                "title": "UTGST",
                "apipath": "",
                "apipathfilter": "",
                "seq": 41,
                "subMenuItems": [
                    {
                        "id": 460,
                        "parentmenuid": 282,
                        "title": "Act",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 140,
                        "subMenuItems": []
                    },
                    {
                        "id": 461,
                        "parentmenuid": 282,
                        "title": "Rules",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 141,
                        "subMenuItems": []
                    },
                    {
                        "id": 462,
                        "parentmenuid": 282,
                        "title": "Notifications",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 142,
                        "subMenuItems": [
                            {
                                "id": 637,
                                "parentmenuid": 462,
                                "title": "UTGST (Rates) Notifications ",
                                "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/9/32/112/37/null",
                                "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/9/32/112/37/null/@From_Date/@To_Date",
                                "seq": 16,
                                "subMenuItems": []
                            },
                            {
                                "id": 638,
                                "parentmenuid": 462,
                                "title": "UTGST (RULE) Notifications ",
                                "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/9/32/112/38/null",
                                "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/9/32/112/38/null/@From_Date/@To_Date",
                                "seq": 17,
                                "subMenuItems": []
                            },
                            {
                                "id": 639,
                                "parentmenuid": 462,
                                "title": "Effective UTGST (Rates) Notifications ",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 18,
                                "subMenuItems": []
                            },
                            {
                                "id": 640,
                                "parentmenuid": 462,
                                "title": "Effective UTGST (Rule) Notifications ",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 19,
                                "subMenuItems": []
                            }
                        ]
                    }
                ]
            },
            {
                "id": 283,
                "parentmenuid": 159,
                "title": "CESS",
                "apipath": "",
                "apipathfilter": "",
                "seq": 42,
                "subMenuItems": [
                    {
                        "id": 463,
                        "parentmenuid": 283,
                        "title": "Cess Act ",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 143,
                        "subMenuItems": []
                    },
                    {
                        "id": 464,
                        "parentmenuid": 283,
                        "title": "Ordinance",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 144,
                        "subMenuItems": []
                    },
                    {
                        "id": 465,
                        "parentmenuid": 283,
                        "title": "Circulars",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/9/33/115/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/9/33/115/0/null/@From_Date/@To_Date",
                        "seq": 145,
                        "subMenuItems": []
                    },
                    {
                        "id": 466,
                        "parentmenuid": 283,
                        "title": "Notifications",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 146,
                        "subMenuItems": [
                            {
                                "id": 641,
                                "parentmenuid": 466,
                                "title": "Cess (Rates) Notification",
                                "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/9/33/116/41/null",
                                "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/9/33/116/41/null/@From_Date/@To_Date",
                                "seq": 20,
                                "subMenuItems": []
                            },
                            {
                                "id": 642,
                                "parentmenuid": 466,
                                "title": "Cess (Rules) Notification ",
                                "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/9/33/116/42/null",
                                "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/9/33/116/42/null/@From_Date/@To_Date",
                                "seq": 21,
                                "subMenuItems": []
                            },
                            {
                                "id": 643,
                                "parentmenuid": 466,
                                "title": "Effective Compensation Cess (Rate) Notifications ",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 22,
                                "subMenuItems": []
                            },
                            {
                                "id": 644,
                                "parentmenuid": 466,
                                "title": "Effective Compensation Cess (Rule) Notifications ",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 23,
                                "subMenuItems": []
                            }
                        ]
                    }
                ]
            },
            {
                "id": 284,
                "parentmenuid": 159,
                "title": "SGST",
                "apipath": "",
                "apipathfilter": "",
                "seq": 43,
                "subMenuItems": [
                    {
                        "id": 467,
                        "parentmenuid": 284,
                        "title": "SGST- E-waybill",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 147,
                        "subMenuItems": []
                    }
                ]
            },
            {
                "id": 285,
                "parentmenuid": 159,
                "title": "FAQ",
                "apipath": "",
                "apipathfilter": "",
                "seq": 44,
                "subMenuItems": [
                    {
                        "id": 468,
                        "parentmenuid": 285,
                        "title": "Press Releases ",
                        "apipath": "http://54.227.115.248:8081/api/PressRelease/GetPressReleaseIndexPage/9/35/118/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/PressRelease/GetPressReleaseIndexPagefilter/9/35/118/0/null/@From_Date/@To_Date",
                        "seq": 148,
                        "subMenuItems": []
                    },
                    {
                        "id": 469,
                        "parentmenuid": 285,
                        "title": "FAQ",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 149,
                        "subMenuItems": []
                    },
                    {
                        "id": 470,
                        "parentmenuid": 285,
                        "title": "GST@GOI",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 150,
                        "subMenuItems": []
                    },
                    {
                        "id": 471,
                        "parentmenuid": 285,
                        "title": "Publicity",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 151,
                        "subMenuItems": [
                            {
                                "id": 645,
                                "parentmenuid": 471,
                                "title": "GST ON REAL ESTATE",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 24,
                                "subMenuItems": []
                            },
                            {
                                "id": 646,
                                "parentmenuid": 471,
                                "title": "ADVANCE RULING AND APPEAL MECHANISM",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 25,
                                "subMenuItems": []
                            },
                            {
                                "id": 647,
                                "parentmenuid": 471,
                                "title": "Filing of GST return",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 26,
                                "subMenuItems": []
                            },
                            {
                                "id": 648,
                                "parentmenuid": 471,
                                "title": "Migration to GST ",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 27,
                                "subMenuItems": []
                            },
                            {
                                "id": 649,
                                "parentmenuid": 471,
                                "title": "Office Memorandum",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 28,
                                "subMenuItems": []
                            },
                            {
                                "id": 650,
                                "parentmenuid": 471,
                                "title": "GST Guidance Note ",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 29,
                                "subMenuItems": []
                            },
                            {
                                "id": 651,
                                "parentmenuid": 471,
                                "title": " Gst Basic Concepts Of Transition And Invoice",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 30,
                                "subMenuItems": []
                            },
                            {
                                "id": 652,
                                "parentmenuid": 471,
                                "title": "CBEC & State's Orders/Papers /FAQs / Circular",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 31,
                                "subMenuItems": []
                            },
                            {
                                "id": 653,
                                "parentmenuid": 471,
                                "title": "Changes in Customs ",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 32,
                                "subMenuItems": []
                            },
                            {
                                "id": 654,
                                "parentmenuid": 471,
                                "title": "Gst Basic Concepts Of Transition And Invoice",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 33,
                                "subMenuItems": []
                            }
                        ]
                    }
                ]
            },
            {
                "id": 286,
                "parentmenuid": 159,
                "title": "MISC",
                "apipath": "",
                "apipathfilter": "",
                "seq": 45,
                "subMenuItems": [
                    {
                        "id": 472,
                        "parentmenuid": 286,
                        "title": "Anti-Profiteering",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 152,
                        "subMenuItems": []
                    },
                    {
                        "id": 473,
                        "parentmenuid": 286,
                        "title": "DIPP Notifications",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 153,
                        "subMenuItems": []
                    },
                    {
                        "id": 474,
                        "parentmenuid": 286,
                        "title": "List of GST Notifications Rescinded/Superseded",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 154,
                        "subMenuItems": []
                    },
                    {
                        "id": 475,
                        "parentmenuid": 286,
                        "title": "Metrology",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 155,
                        "subMenuItems": []
                    },
                    {
                        "id": 476,
                        "parentmenuid": 286,
                        "title": "Audit Guidelines",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 156,
                        "subMenuItems": []
                    },
                    {
                        "id": 477,
                        "parentmenuid": 286,
                        "title": "Due Dates",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 157,
                        "subMenuItems": []
                    },
                    {
                        "id": 478,
                        "parentmenuid": 286,
                        "title": "Refund",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 158,
                        "subMenuItems": []
                    }
                ]
            },
            {
                "id": 287,
                "parentmenuid": 159,
                "title": "Caselaws",
                "apipath": "",
                "apipathfilter": "",
                "seq": 46,
                "subMenuItems": [
                    {
                        "id": 479,
                        "parentmenuid": 287,
                        "title": "SC Cases",
                        "apipath": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPage/9/37/129/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPagefilter/9/37/129/0/null/@From_Date/@To_Date",
                        "seq": 159,
                        "subMenuItems": []
                    },
                    {
                        "id": 480,
                        "parentmenuid": 287,
                        "title": "HC Cases",
                        "apipath": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPage/9/37/130/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPagefilter/9/37/130/0/null/@From_Date/@To_Date",
                        "seq": 160,
                        "subMenuItems": []
                    },
                    {
                        "id": 481,
                        "parentmenuid": 287,
                        "title": "GSTAT",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 161,
                        "subMenuItems": []
                    },
                    {
                        "id": 482,
                        "parentmenuid": 287,
                        "title": "Authority for Advance Ruling",
                        "apipath": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPage/9/37/132/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPagefilter/9/37/132/0/null/@From_Date/@To_Date",
                        "seq": 162,
                        "subMenuItems": []
                    },
                    {
                        "id": 483,
                        "parentmenuid": 287,
                        "title": "National Anti-Profiteering Authority",
                        "apipath": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPage/9/37/133/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPagefilter/9/37/133/0/null/@From_Date/@To_Date",
                        "seq": 163,
                        "subMenuItems": []
                    },
                    {
                        "id": 484,
                        "parentmenuid": 287,
                        "title": "Central Sales Tax Appellate Authority",
                        "apipath": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPage/9/37/134/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPagefilter/9/37/134/0/null/@From_Date/@To_Date",
                        "seq": 164,
                        "subMenuItems": []
                    },
                    {
                        "id": 485,
                        "parentmenuid": 287,
                        "title": "Appellate Authority for Advance Ruling",
                        "apipath": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPage/9/37/135/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPagefilter/9/37/135/0/null/@From_Date/@To_Date",
                        "seq": 165,
                        "subMenuItems": []
                    },
                    {
                        "id": 486,
                        "parentmenuid": 287,
                        "title": "Miscellaneous",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 166,
                        "subMenuItems": []
                    }
                ]
            },
            {
                "id": 288,
                "parentmenuid": 159,
                "title": "Council",
                "apipath": "",
                "apipathfilter": "",
                "seq": 47,
                "subMenuItems": [
                    {
                        "id": 577,
                        "parentmenuid": 288,
                        "title": "Council Directory",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 167,
                        "subMenuItems": []
                    },
                    {
                        "id": 487,
                        "parentmenuid": 288,
                        "title": "E-Way Bills",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 168,
                        "subMenuItems": [
                            {
                                "id": 655,
                                "parentmenuid": 487,
                                "title": "ELECTRONIC WAY BILL",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 34,
                                "subMenuItems": []
                            },
                            {
                                "id": 656,
                                "parentmenuid": 487,
                                "title": "E-Way Bill FAQs",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 35,
                                "subMenuItems": []
                            },
                            {
                                "id": 657,
                                "parentmenuid": 487,
                                "title": "Notifications",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 36,
                                "subMenuItems": []
                            },
                            {
                                "id": 658,
                                "parentmenuid": 487,
                                "title": "USER MANUAL",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 37,
                                "subMenuItems": []
                            }
                        ]
                    },
                    {
                        "id": 488,
                        "parentmenuid": 288,
                        "title": "Business Rules",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 169,
                        "subMenuItems": [
                            {
                                "id": 659,
                                "parentmenuid": 488,
                                "title": "PROCEDURE BUSINESS",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 38,
                                "subMenuItems": []
                            }
                        ]
                    },
                    {
                        "id": 489,
                        "parentmenuid": 288,
                        "title": "Council Meetings",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 170,
                        "subMenuItems": []
                    },
                    {
                        "id": 490,
                        "parentmenuid": 288,
                        "title": "GST Providers",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 171,
                        "subMenuItems": []
                    },
                    {
                        "id": 491,
                        "parentmenuid": 288,
                        "title": "GoM & Committees",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 172,
                        "subMenuItems": [
                            {
                                "id": 660,
                                "parentmenuid": 491,
                                "title": "GST INSTRUCTION",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 39,
                                "subMenuItems": []
                            },
                            {
                                "id": 661,
                                "parentmenuid": 491,
                                "title": "GST OFFICE ORDER",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 40,
                                "subMenuItems": []
                            }
                        ]
                    },
                    {
                        "id": 492,
                        "parentmenuid": 288,
                        "title": "GST Circulars",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 173,
                        "subMenuItems": [
                            {
                                "id": 662,
                                "parentmenuid": 492,
                                "title": "GST CIRCULAR",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 41,
                                "subMenuItems": []
                            },
                            {
                                "id": 663,
                                "parentmenuid": 492,
                                "title": "GST COUNCIL ORDER",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 42,
                                "subMenuItems": []
                            },
                            {
                                "id": 664,
                                "parentmenuid": 492,
                                "title": "GST COUNCIL VACANCY",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 43,
                                "subMenuItems": []
                            },
                            {
                                "id": 665,
                                "parentmenuid": 492,
                                "title": "CIRCULAR",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 44,
                                "subMenuItems": []
                            },
                            {
                                "id": 666,
                                "parentmenuid": 492,
                                "title": "OFFICE MEMORANDUM",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 45,
                                "subMenuItems": []
                            }
                        ]
                    }
                ]
            },
            {
                "id": 289,
                "parentmenuid": 159,
                "title": "History",
                "apipath": "",
                "apipathfilter": "",
                "seq": 48,
                "subMenuItems": [
                    {
                        "id": 493,
                        "parentmenuid": 289,
                        "title": "Expert Panel",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 174,
                        "subMenuItems": []
                    },
                    {
                        "id": 494,
                        "parentmenuid": 289,
                        "title": "Amendment",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 175,
                        "subMenuItems": []
                    },
                    {
                        "id": 495,
                        "parentmenuid": 289,
                        "title": "Bills",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 176,
                        "subMenuItems": [
                            {
                                "id": 667,
                                "parentmenuid": 495,
                                "title": "GST Bills as passed by Lok Sabha",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 46,
                                "subMenuItems": []
                            },
                            {
                                "id": 668,
                                "parentmenuid": 495,
                                "title": "GST Bills as introduced in Lok Sabha ",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 47,
                                "subMenuItems": []
                            },
                            {
                                "id": 669,
                                "parentmenuid": 495,
                                "title": "GST Bills Enacted",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 48,
                                "subMenuItems": []
                            }
                        ]
                    },
                    {
                        "id": 496,
                        "parentmenuid": 289,
                        "title": "OTHERS",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 177,
                        "subMenuItems": [
                            {
                                "id": 670,
                                "parentmenuid": 496,
                                "title": "GST Rate",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 49,
                                "subMenuItems": []
                            },
                            {
                                "id": 671,
                                "parentmenuid": 496,
                                "title": "GST Rules",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 50,
                                "subMenuItems": []
                            },
                            {
                                "id": 672,
                                "parentmenuid": 496,
                                "title": "Draft GST Rules",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 51,
                                "subMenuItems": []
                            },
                            {
                                "id": 673,
                                "parentmenuid": 496,
                                "title": "Advantages of GST",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 52,
                                "subMenuItems": []
                            },
                            {
                                "id": 674,
                                "parentmenuid": 496,
                                "title": "Final GST Rules",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 53,
                                "subMenuItems": []
                            },
                            {
                                "id": 675,
                                "parentmenuid": 496,
                                "title": "GST Rules - Dated",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 54,
                                "subMenuItems": []
                            },
                            {
                                "id": 676,
                                "parentmenuid": 496,
                                "title": "Drafts",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 55,
                                "subMenuItems": []
                            },
                            {
                                "id": 677,
                                "parentmenuid": 496,
                                "title": "GSTN as SPV",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 56,
                                "subMenuItems": []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": 151,
        "parentmenuid": 0,
        "title": "Income Tax",
        "apipath": "",
        "apipathfilter": "",
        "seq": 2,
        "subMenuItems": [
            {
                "id": 251,
                "parentmenuid": 151,
                "title": "Notifications",
                "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/1/1/0/0/null",
                "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/1/1/0/0/null/@From_Date/@To_Date",
                "seq": 1,
                "subMenuItems": []
            },
            {
                "id": 252,
                "parentmenuid": 151,
                "title": "Circulars",
                "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/1/2/0/0/null",
                "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/1/2/0/0/null/@From_Date/@To_Date",
                "seq": 2,
                "subMenuItems": []
            },
            {
                "id": 253,
                "parentmenuid": 151,
                "title": "Instructions",
                "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/1/3/0/0/null",
                "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/1/3/0/0/null/@From_Date/@To_Date",
                "seq": 3,
                "subMenuItems": []
            },
            {
                "id": 254,
                "parentmenuid": 151,
                "title": "CaseLaws",
                "apipath": "",
                "apipathfilter": "",
                "seq": 4,
                "subMenuItems": [
                    {
                        "id": 351,
                        "parentmenuid": 254,
                        "title": "SC Cases",
                        "apipath": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPage/1/4/1/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPagefilter/1/4/1/0/null/@From_Date/@To_Date",
                        "seq": 1,
                        "subMenuItems": []
                    },
                    {
                        "id": 352,
                        "parentmenuid": 254,
                        "title": "HC Cases",
                        "apipath": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPage/1/4/2/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPagefilter/1/4/2/0/null/@From_Date/@To_Date",
                        "seq": 2,
                        "subMenuItems": []
                    },
                    {
                        "id": 353,
                        "parentmenuid": 254,
                        "title": "ITAT Cases",
                        "apipath": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPage/1/4/3/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPagefilter/1/4/3/0/null/@From_Date/@To_Date",
                        "seq": 3,
                        "subMenuItems": []
                    }
                ]
            },
            {
                "id": 255,
                "parentmenuid": 151,
                "title": "Miscellaneous",
                "apipath": "",
                "apipathfilter": "",
                "seq": 5,
                "subMenuItems": [
                    {
                        "id": 354,
                        "parentmenuid": 255,
                        "title": "E-Assessment",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 4,
                        "subMenuItems": [
                            {
                                "id": 601,
                                "parentmenuid": 354,
                                "title": "Press Release",
                                "apipath": "http://54.227.115.248:8081/api/PressRelease/GetPressReleaseIndexPage/1/5/4/1/null",
                                "apipathfilter": "http://54.227.115.248:8081/api/PressRelease/GetPressReleaseIndexPagefilter/1/5/4/1/null/@From_Date/@To_Date",
                                "seq": 1,
                                "subMenuItems": []
                            },
                            {
                                "id": 602,
                                "parentmenuid": 354,
                                "title": "Notifications",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 2,
                                "subMenuItems": []
                            }
                        ]
                    },
                    {
                        "id": 355,
                        "parentmenuid": 255,
                        "title": "Black Money Cases",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 5,
                        "subMenuItems": [
                            {
                                "id": 603,
                                "parentmenuid": 355,
                                "title": "SC Cases",
                                "apipath": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPage/1/5/5/3/null",
                                "apipathfilter": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPagefilter/1/5/5/3/null/@From_Date/@To_Date",
                                "seq": 3,
                                "subMenuItems": []
                            },
                            {
                                "id": 604,
                                "parentmenuid": 355,
                                "title": "HC Cases",
                                "apipath": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPage/1/5/5/4/null",
                                "apipathfilter": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPagefilter/1/5/5/4/null/@From_Date/@To_Date",
                                "seq": 4,
                                "subMenuItems": []
                            }
                        ]
                    },
                    {
                        "id": 356,
                        "parentmenuid": 255,
                        "title": "Benami Act",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 6,
                        "subMenuItems": [
                            {
                                "id": 605,
                                "parentmenuid": 356,
                                "title": "Notification",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 5,
                                "subMenuItems": []
                            },
                            {
                                "id": 606,
                                "parentmenuid": 356,
                                "title": "Benami Act",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 6,
                                "subMenuItems": []
                            },
                            {
                                "id": 607,
                                "parentmenuid": 356,
                                "title": "Benami Transactions (Prohibition)",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 7,
                                "subMenuItems": []
                            },
                            {
                                "id": 608,
                                "parentmenuid": 356,
                                "title": "SC Cases",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 8,
                                "subMenuItems": []
                            },
                            {
                                "id": 609,
                                "parentmenuid": 356,
                                "title": "HC Cases",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 9,
                                "subMenuItems": []
                            }
                        ]
                    },
                    {
                        "id": 357,
                        "parentmenuid": 255,
                        "title": "Black Money Basket",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 7,
                        "subMenuItems": [
                            {
                                "id": 610,
                                "parentmenuid": 357,
                                "title": "Direct Tax Vivad se Vishwas",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 10,
                                "subMenuItems": []
                            }
                        ]
                    },
                    {
                        "id": 358,
                        "parentmenuid": 255,
                        "title": "Faceless Scheme",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 8,
                        "subMenuItems": [
                            {
                                "id": 611,
                                "parentmenuid": 358,
                                "title": "Notifications",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 11,
                                "subMenuItems": []
                            },
                            {
                                "id": 612,
                                "parentmenuid": 358,
                                "title": "Orders",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 12,
                                "subMenuItems": []
                            },
                            {
                                "id": 613,
                                "parentmenuid": 358,
                                "title": "Instructions",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 13,
                                "subMenuItems": []
                            }
                        ]
                    },
                    {
                        "id": 359,
                        "parentmenuid": 255,
                        "title": "Directorate of Income Tax (Systems)",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/1/5/9/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/1/5/9/0/null/@From_Date/@To_Date",
                        "seq": 9,
                        "subMenuItems": []
                    },
                    {
                        "id": 360,
                        "parentmenuid": 255,
                        "title": "Citizens Charter",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 10,
                        "subMenuItems": []
                    },
                    {
                        "id": 361,
                        "parentmenuid": 255,
                        "title": "Advance Ruling Cases",
                        "apipath": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPage/1/5/11/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPagefilter/1/5/11/0/null/@From_Date/@To_Date",
                        "seq": 11,
                        "subMenuItems": []
                    },
                    {
                        "id": 362,
                        "parentmenuid": 255,
                        "title": "Other Cases",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 12,
                        "subMenuItems": []
                    },
                    {
                        "id": 363,
                        "parentmenuid": 255,
                        "title": "Reports",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 13,
                        "subMenuItems": []
                    }
                ]
            }
        ]
    },
    {
        "id": 152,
        "parentmenuid": 0,
        "title": "Customs",
        "apipath": "",
        "apipathfilter": "",
        "seq": 3,
        "subMenuItems": [
            {
                "id": 256,
                "parentmenuid": 152,
                "title": "Notifications",
                "apipath": "",
                "apipathfilter": "",
                "seq": 6,
                "subMenuItems": [
                    {
                        "id": 364,
                        "parentmenuid": 256,
                        "title": "Tariff Notifications",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/2/6/14/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/2/6/14/0/null/@From_Date/@To_Date",
                        "seq": 14,
                        "subMenuItems": []
                    },
                    {
                        "id": 365,
                        "parentmenuid": 256,
                        "title": "Non-Tariff Notifications",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/2/6/15/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/2/6/15/0/null/@From_Date/@To_Date",
                        "seq": 15,
                        "subMenuItems": []
                    },
                    {
                        "id": 366,
                        "parentmenuid": 256,
                        "title": "CVD Notifications",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/2/6/16/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/2/6/16/0/null/@From_Date/@To_Date",
                        "seq": 16,
                        "subMenuItems": []
                    },
                    {
                        "id": 367,
                        "parentmenuid": 256,
                        "title": "Anti-Dumping Duty",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/2/6/17/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/2/6/17/0/null/@From_Date/@To_Date",
                        "seq": 17,
                        "subMenuItems": []
                    },
                    {
                        "id": 368,
                        "parentmenuid": 256,
                        "title": "NT/CAA/DRI Notifications",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/2/6/18/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/2/6/18/0/null/@From_Date/@To_Date",
                        "seq": 18,
                        "subMenuItems": []
                    },
                    {
                        "id": 369,
                        "parentmenuid": 256,
                        "title": "Safeguard Duty",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/2/6/19/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/2/6/19/0/null/@From_Date/@To_Date",
                        "seq": 19,
                        "subMenuItems": []
                    }
                ]
            },
            {
                "id": 257,
                "parentmenuid": 152,
                "title": "Circulars",
                "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/2/7/0/0/null",
                "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/2/7/0/0/null/@From_Date/@To_Date",
                "seq": 7,
                "subMenuItems": []
            },
            {
                "id": 258,
                "parentmenuid": 152,
                "title": "CaseLaws",
                "apipath": "",
                "apipathfilter": "",
                "seq": 8,
                "subMenuItems": [
                    {
                        "id": 370,
                        "parentmenuid": 258,
                        "title": "SC Cases",
                        "apipath": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPage/2/8/20/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPagefilter/2/8/20/0/null/@From_Date/@To_Date",
                        "seq": 20,
                        "subMenuItems": []
                    },
                    {
                        "id": 371,
                        "parentmenuid": 258,
                        "title": "HC Cases",
                        "apipath": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPage/2/8/21/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPagefilter/2/8/21/0/null/@From_Date/@To_Date",
                        "seq": 21,
                        "subMenuItems": []
                    },
                    {
                        "id": 372,
                        "parentmenuid": 258,
                        "title": "Cestat Cases",
                        "apipath": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPage/2/8/22/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPagefilter/2/8/22/0/null/@From_Date/@To_Date",
                        "seq": 22,
                        "subMenuItems": []
                    }
                ]
            },
            {
                "id": 259,
                "parentmenuid": 152,
                "title": "Miscellaneous",
                "apipath": "",
                "apipathfilter": "",
                "seq": 9,
                "subMenuItems": [
                    {
                        "id": 373,
                        "parentmenuid": 259,
                        "title": "Customs Miscellaneous Circulars",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/2/9/23/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/2/9/23/0/null/@From_Date/@To_Date",
                        "seq": 23,
                        "subMenuItems": []
                    },
                    {
                        "id": 374,
                        "parentmenuid": 259,
                        "title": "Advance Ruling",
                        "apipath": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPage/2/9/24/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPagefilter/2/9/24/0/null/@From_Date/@To_Date",
                        "seq": 24,
                        "subMenuItems": []
                    },
                    {
                        "id": 375,
                        "parentmenuid": 259,
                        "title": "Settlement Commission",
                        "apipath": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPage/2/9/25/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPagefilter/2/9/25/0/null/@From_Date/@To_Date",
                        "seq": 25,
                        "subMenuItems": []
                    },
                    {
                        "id": 376,
                        "parentmenuid": 259,
                        "title": "Drawback Cases",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 26,
                        "subMenuItems": []
                    }
                ]
            },
            {
                "id": 279,
                "parentmenuid": 152,
                "title": "Custom Rules",
                "apipath": "",
                "apipathfilter": "",
                "seq": 10,
                "subMenuItems": []
            }
        ]
    },
    {
        "id": 153,
        "parentmenuid": 0,
        "title": "Excise",
        "apipath": "",
        "apipathfilter": "",
        "seq": 4,
        "subMenuItems": [
            {
                "id": 260,
                "parentmenuid": 153,
                "title": "Notifications",
                "apipath": "",
                "apipathfilter": "",
                "seq": 10,
                "subMenuItems": [
                    {
                        "id": 377,
                        "parentmenuid": 260,
                        "title": "Tariff Notifications",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/3/10/27/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/3/10/27/0/null/@From_Date/@To_Date",
                        "seq": 27,
                        "subMenuItems": []
                    },
                    {
                        "id": 378,
                        "parentmenuid": 260,
                        "title": "Non-Tariff Notifications",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/3/10/28/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/3/10/28/0/null/@From_Date/@To_Date",
                        "seq": 28,
                        "subMenuItems": []
                    },
                    {
                        "id": 379,
                        "parentmenuid": 260,
                        "title": "Cessess Notifications",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/3/10/29/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/3/10/29/0/null/@From_Date/@To_Date",
                        "seq": 29,
                        "subMenuItems": []
                    }
                ]
            },
            {
                "id": 261,
                "parentmenuid": 153,
                "title": "Circulars",
                "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/3/11/0/0/null",
                "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/3/11/0/0/null/@From_Date/@To_Date",
                "seq": 11,
                "subMenuItems": []
            },
            {
                "id": 262,
                "parentmenuid": 153,
                "title": "CaseLaws",
                "apipath": "",
                "apipathfilter": "",
                "seq": 12,
                "subMenuItems": [
                    {
                        "id": 380,
                        "parentmenuid": 262,
                        "title": "SC Cases",
                        "apipath": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPage/3/12/30/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPagefilter/3/12/30/0/null/@From_Date/@To_Date",
                        "seq": 30,
                        "subMenuItems": []
                    },
                    {
                        "id": 381,
                        "parentmenuid": 262,
                        "title": "HC Cases",
                        "apipath": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPage/3/12/31/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPagefilter/3/12/31/0/null/@From_Date/@To_Date",
                        "seq": 31,
                        "subMenuItems": []
                    },
                    {
                        "id": 382,
                        "parentmenuid": 262,
                        "title": "Cestat Cases",
                        "apipath": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPage/3/12/32/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPagefilter/3/12/32/0/null/@From_Date/@To_Date",
                        "seq": 32,
                        "subMenuItems": []
                    }
                ]
            },
            {
                "id": 263,
                "parentmenuid": 153,
                "title": "Miscellaneous",
                "apipath": "",
                "apipathfilter": "",
                "seq": 13,
                "subMenuItems": [
                    {
                        "id": 383,
                        "parentmenuid": 263,
                        "title": "Advance Ruling",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 33,
                        "subMenuItems": []
                    },
                    {
                        "id": 384,
                        "parentmenuid": 263,
                        "title": "Sabke Vishwas Scheme 2019",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 34,
                        "subMenuItems": []
                    },
                    {
                        "id": 385,
                        "parentmenuid": 263,
                        "title": "Valid Tariff Notifictions",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 35,
                        "subMenuItems": []
                    },
                    {
                        "id": 386,
                        "parentmenuid": 263,
                        "title": "Central Excise Rules",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 36,
                        "subMenuItems": []
                    },
                    {
                        "id": 387,
                        "parentmenuid": 263,
                        "title": "CCRs - 2017",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 37,
                        "subMenuItems": []
                    },
                    {
                        "id": 388,
                        "parentmenuid": 263,
                        "title": "Valid Non-Tariff Notifications",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 38,
                        "subMenuItems": []
                    },
                    {
                        "id": 389,
                        "parentmenuid": 263,
                        "title": "Excise Amendment",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 39,
                        "subMenuItems": []
                    },
                    {
                        "id": 390,
                        "parentmenuid": 263,
                        "title": "MISC Circulars",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/3/13/40/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/3/13/40/0/null/@From_Date/@To_Date",
                        "seq": 40,
                        "subMenuItems": []
                    },
                    {
                        "id": 391,
                        "parentmenuid": 263,
                        "title": "Settlement",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 41,
                        "subMenuItems": []
                    },
                    {
                        "id": 392,
                        "parentmenuid": 263,
                        "title": "COMMISSIONER (APPEALS) ORDERS",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 42,
                        "subMenuItems": []
                    },
                    {
                        "id": 393,
                        "parentmenuid": 263,
                        "title": "Tribunal",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/3/13/43/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/3/13/43/0/null/@From_Date/@To_Date",
                        "seq": 43,
                        "subMenuItems": []
                    }
                ]
            }
        ]
    },
    {
        "id": 158,
        "parentmenuid": 0,
        "title": "Service Tax",
        "apipath": "",
        "apipathfilter": "",
        "seq": 5,
        "subMenuItems": [
            {
                "id": 275,
                "parentmenuid": 158,
                "title": "Notifications",
                "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/8/25/0/0/null",
                "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/8/25/0/0/null/@From_Date/@To_Date",
                "seq": 25,
                "subMenuItems": []
            },
            {
                "id": 276,
                "parentmenuid": 158,
                "title": "Circulars",
                "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/8/26/0/0/null",
                "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/8/26/0/0/null/@From_Date/@To_Date",
                "seq": 26,
                "subMenuItems": []
            },
            {
                "id": 277,
                "parentmenuid": 158,
                "title": "CaseLaws",
                "apipath": "",
                "apipathfilter": "",
                "seq": 27,
                "subMenuItems": [
                    {
                        "id": 426,
                        "parentmenuid": 277,
                        "title": "SC Cases",
                        "apipath": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPage/8/27/76/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPagefilter/8/27/76/0/null/@From_Date/@To_Date",
                        "seq": 76,
                        "subMenuItems": []
                    },
                    {
                        "id": 427,
                        "parentmenuid": 277,
                        "title": "HC Cases",
                        "apipath": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPage/8/27/77/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPagefilter/8/27/77/0/null/@From_Date/@To_Date",
                        "seq": 77,
                        "subMenuItems": []
                    },
                    {
                        "id": 428,
                        "parentmenuid": 277,
                        "title": "Cestat Cases",
                        "apipath": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPage/8/27/78/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPagefilter/8/27/78/0/null/@From_Date/@To_Date",
                        "seq": 78,
                        "subMenuItems": []
                    }
                ]
            },
            {
                "id": 278,
                "parentmenuid": 158,
                "title": "Miscellaneous",
                "apipath": "",
                "apipathfilter": "",
                "seq": 28,
                "subMenuItems": [
                    {
                        "id": 429,
                        "parentmenuid": 278,
                        "title": "Sabke Vishwas Scheme 2019",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 79,
                        "subMenuItems": []
                    },
                    {
                        "id": 430,
                        "parentmenuid": 278,
                        "title": "Accounting Head",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 80,
                        "subMenuItems": []
                    },
                    {
                        "id": 431,
                        "parentmenuid": 278,
                        "title": "Service Tax Rules",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 81,
                        "subMenuItems": []
                    },
                    {
                        "id": 432,
                        "parentmenuid": 278,
                        "title": "Advance Ruling",
                        "apipath": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPage/8/28/82/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPagefilter/8/28/82/0/null/@From_Date/@To_Date",
                        "seq": 82,
                        "subMenuItems": []
                    },
                    {
                        "id": 433,
                        "parentmenuid": 278,
                        "title": "FAQ",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 83,
                        "subMenuItems": []
                    },
                    {
                        "id": 434,
                        "parentmenuid": 278,
                        "title": "Finacne Act, 1994",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 84,
                        "subMenuItems": []
                    },
                    {
                        "id": 435,
                        "parentmenuid": 278,
                        "title": "Commissioner (Appeals) Orders",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 85,
                        "subMenuItems": []
                    },
                    {
                        "id": 436,
                        "parentmenuid": 278,
                        "title": "Removal of Difficulty",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 86,
                        "subMenuItems": []
                    },
                    {
                        "id": 437,
                        "parentmenuid": 278,
                        "title": "VCES",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 87,
                        "subMenuItems": [
                            {
                                "id": 616,
                                "parentmenuid": 437,
                                "title": "Service Tax VCS Rules 2013",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 16,
                                "subMenuItems": []
                            },
                            {
                                "id": 617,
                                "parentmenuid": 437,
                                "title": "Circular On VCES",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 17,
                                "subMenuItems": []
                            },
                            {
                                "id": 618,
                                "parentmenuid": 437,
                                "title": "Order + TRU Letter on VCES",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 18,
                                "subMenuItems": []
                            },
                            {
                                "id": 619,
                                "parentmenuid": 437,
                                "title": "Excerpts from Hon'ble Finance Minister's Budget Speech",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 19,
                                "subMenuItems": []
                            },
                            {
                                "id": 620,
                                "parentmenuid": 437,
                                "title": "Finance Act, 2013",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 20,
                                "subMenuItems": []
                            },
                            {
                                "id": 621,
                                "parentmenuid": 437,
                                "title": "Frequently Asked Questions on VCES",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 21,
                                "subMenuItems": []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": 154,
        "parentmenuid": 0,
        "title": "Fema",
        "apipath": "",
        "apipathfilter": "",
        "seq": 6,
        "subMenuItems": [
            {
                "id": 264,
                "parentmenuid": 154,
                "title": "Notifications",
                "apipath": "",
                "apipathfilter": "",
                "seq": 14,
                "subMenuItems": [
                    {
                        "id": 394,
                        "parentmenuid": 264,
                        "title": "DIPP Notification",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/4/14/44/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/4/14/44/0/null/@From_Date/@To_Date",
                        "seq": 44,
                        "subMenuItems": []
                    },
                    {
                        "id": 395,
                        "parentmenuid": 264,
                        "title": "RBI Notifications",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/4/14/45/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/4/14/45/0/null/@From_Date/@To_Date",
                        "seq": 45,
                        "subMenuItems": []
                    },
                    {
                        "id": 438,
                        "parentmenuid": 264,
                        "title": "FEMA Notifications",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/4/14/88/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/4/14/88/0/null/@From_Date/@To_Date",
                        "seq": 178,
                        "subMenuItems": []
                    }
                ]
            },
            {
                "id": 265,
                "parentmenuid": 154,
                "title": "Circulars",
                "apipath": "",
                "apipathfilter": "",
                "seq": 15,
                "subMenuItems": [
                    {
                        "id": 396,
                        "parentmenuid": 265,
                        "title": "RBI Circulars",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/4/15/46/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/4/15/46/0/null/@From_Date/@To_Date",
                        "seq": 46,
                        "subMenuItems": []
                    },
                    {
                        "id": 397,
                        "parentmenuid": 265,
                        "title": "Master Circulars",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/4/15/47/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/4/15/47/0/null/@From_Date/@To_Date",
                        "seq": 47,
                        "subMenuItems": []
                    }
                ]
            },
            {
                "id": 266,
                "parentmenuid": 154,
                "title": "Miscellaneous",
                "apipath": "",
                "apipathfilter": "",
                "seq": 16,
                "subMenuItems": [
                    {
                        "id": 398,
                        "parentmenuid": 266,
                        "title": "FEO Act",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 48,
                        "subMenuItems": []
                    },
                    {
                        "id": 399,
                        "parentmenuid": 266,
                        "title": "FDI Approved",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/4/16/49/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/4/16/49/0/null/@From_Date/@To_Date",
                        "seq": 49,
                        "subMenuItems": []
                    },
                    {
                        "id": 400,
                        "parentmenuid": 266,
                        "title": "Exchange Manual",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 50,
                        "subMenuItems": []
                    },
                    {
                        "id": 401,
                        "parentmenuid": 266,
                        "title": "Act",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 51,
                        "subMenuItems": []
                    },
                    {
                        "id": 402,
                        "parentmenuid": 266,
                        "title": "Rules",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 52,
                        "subMenuItems": []
                    },
                    {
                        "id": 403,
                        "parentmenuid": 266,
                        "title": "Regulations",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 53,
                        "subMenuItems": []
                    },
                    {
                        "id": 404,
                        "parentmenuid": 266,
                        "title": "Depository Scheme",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 54,
                        "subMenuItems": []
                    },
                    {
                        "id": 405,
                        "parentmenuid": 266,
                        "title": "Press Note",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/4/16/55/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/4/16/55/0/null/@From_Date/@To_Date",
                        "seq": 55,
                        "subMenuItems": []
                    }
                ]
            },
            {
                "id": 267,
                "parentmenuid": 154,
                "title": "CaseLaws",
                "apipath": "",
                "apipathfilter": "",
                "seq": 17,
                "subMenuItems": [
                    {
                        "id": 406,
                        "parentmenuid": 267,
                        "title": "SC Cases",
                        "apipath": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPage/4/17/56/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPagefilter/4/17/56/0/null/@From_Date/@To_Date",
                        "seq": 56,
                        "subMenuItems": []
                    },
                    {
                        "id": 407,
                        "parentmenuid": 267,
                        "title": "HC Cases",
                        "apipath": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPage/4/17/57/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPagefilter/4/17/57/0/null/@From_Date/@To_Date",
                        "seq": 57,
                        "subMenuItems": []
                    }
                ]
            }
        ]
    },
    {
        "id": 155,
        "parentmenuid": 0,
        "title": "DGFT",
        "apipath": "",
        "apipathfilter": "",
        "seq": 7,
        "subMenuItems": [
            {
                "id": 268,
                "parentmenuid": 155,
                "title": "Notifications",
                "apipath": "",
                "apipathfilter": "",
                "seq": 18,
                "subMenuItems": [
                    {
                        "id": 408,
                        "parentmenuid": 268,
                        "title": "DGFT NOTIFICATION",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/5/18/58/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/5/18/58/0/null/@From_Date/@To_Date",
                        "seq": 58,
                        "subMenuItems": []
                    },
                    {
                        "id": 409,
                        "parentmenuid": 268,
                        "title": "DGFT PUBLICE NOTICE",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/5/18/59/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/5/18/59/0/null/@From_Date/@To_Date",
                        "seq": 59,
                        "subMenuItems": []
                    },
                    {
                        "id": 410,
                        "parentmenuid": 268,
                        "title": "DGFT TRADE NOTICE",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/5/18/60/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/5/18/60/0/null/@From_Date/@To_Date",
                        "seq": 60,
                        "subMenuItems": []
                    }
                ]
            },
            {
                "id": 269,
                "parentmenuid": 155,
                "title": "Circulars",
                "apipath": "",
                "apipathfilter": "",
                "seq": 19,
                "subMenuItems": [
                    {
                        "id": 411,
                        "parentmenuid": 269,
                        "title": "DGFT CIRCULAR",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/5/19/61/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/5/19/61/0/null/@From_Date/@To_Date",
                        "seq": 61,
                        "subMenuItems": []
                    }
                ]
            },
            {
                "id": 270,
                "parentmenuid": 155,
                "title": "Miscellaneous",
                "apipath": "",
                "apipathfilter": "",
                "seq": 20,
                "subMenuItems": [
                    {
                        "id": 412,
                        "parentmenuid": 270,
                        "title": "Miscellaneous",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 62,
                        "subMenuItems": []
                    },
                    {
                        "id": 413,
                        "parentmenuid": 270,
                        "title": "FTDR Amendment 2010",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 63,
                        "subMenuItems": []
                    }
                ]
            }
        ]
    },
    {
        "id": 156,
        "parentmenuid": 0,
        "title": "SEZ",
        "apipath": "",
        "apipathfilter": "",
        "seq": 8,
        "subMenuItems": [
            {
                "id": 271,
                "parentmenuid": 156,
                "title": "Notifications",
                "apipath": "",
                "apipathfilter": "",
                "seq": 21,
                "subMenuItems": [
                    {
                        "id": 414,
                        "parentmenuid": 271,
                        "title": "Sez Notifications",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/6/21/64/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/6/21/64/0/null/@From_Date/@To_Date",
                        "seq": 64,
                        "subMenuItems": []
                    }
                ]
            },
            {
                "id": 272,
                "parentmenuid": 156,
                "title": "Instructions",
                "apipath": "",
                "apipathfilter": "",
                "seq": 22,
                "subMenuItems": [
                    {
                        "id": 415,
                        "parentmenuid": 272,
                        "title": "Sez Instructions",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/6/22/65/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/6/22/65/0/null/@From_Date/@To_Date",
                        "seq": 65,
                        "subMenuItems": []
                    }
                ]
            },
            {
                "id": 273,
                "parentmenuid": 156,
                "title": "Miscellaneous",
                "apipath": "",
                "apipathfilter": "",
                "seq": 23,
                "subMenuItems": [
                    {
                        "id": 416,
                        "parentmenuid": 273,
                        "title": "Act 2005",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 66,
                        "subMenuItems": []
                    },
                    {
                        "id": 417,
                        "parentmenuid": 273,
                        "title": "Rules 2006",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 67,
                        "subMenuItems": []
                    },
                    {
                        "id": 418,
                        "parentmenuid": 273,
                        "title": "DGEP",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 68,
                        "subMenuItems": []
                    },
                    {
                        "id": 419,
                        "parentmenuid": 273,
                        "title": "State Acts",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 69,
                        "subMenuItems": []
                    },
                    {
                        "id": 420,
                        "parentmenuid": 273,
                        "title": "State Policy",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 70,
                        "subMenuItems": []
                    },
                    {
                        "id": 421,
                        "parentmenuid": 273,
                        "title": "Miscellaneous",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 71,
                        "subMenuItems": []
                    }
                ]
            }
        ]
    },
    {
        "id": 157,
        "parentmenuid": 0,
        "title": "MISC",
        "apipath": "",
        "apipathfilter": "",
        "seq": 9,
        "subMenuItems": [
            {
                "id": 274,
                "parentmenuid": 157,
                "title": "CaseLaws",
                "apipath": "",
                "apipathfilter": "",
                "seq": 24,
                "subMenuItems": [
                    {
                        "id": 422,
                        "parentmenuid": 274,
                        "title": "SC Cases",
                        "apipath": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPage/7/24/72/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPagefilter/7/24/72/0/null/@From_Date/@To_Date",
                        "seq": 72,
                        "subMenuItems": []
                    },
                    {
                        "id": 423,
                        "parentmenuid": 274,
                        "title": "HC Cases",
                        "apipath": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPage/7/24/73/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPagefilter/7/24/73/0/null/@From_Date/@To_Date",
                        "seq": 73,
                        "subMenuItems": []
                    },
                    {
                        "id": 424,
                        "parentmenuid": 274,
                        "title": "VAT Cases",
                        "apipath": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPage/7/24/74/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPagefilter/7/24/74/0/null/@From_Date/@To_Date",
                        "seq": 74,
                        "subMenuItems": []
                    },
                    {
                        "id": 425,
                        "parentmenuid": 274,
                        "title": "Miscellaneous Cases",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 75,
                        "subMenuItems": [
                            {
                                "id": 614,
                                "parentmenuid": 425,
                                "title": "Caselaw",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 14,
                                "subMenuItems": []
                            },
                            {
                                "id": 615,
                                "parentmenuid": 425,
                                "title": "Cir/ Notifn No.",
                                "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/7/24/75/15/null",
                                "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/7/24/75/15/null/@From_Date/@To_Date",
                                "seq": 15,
                                "subMenuItems": []
                            }
                        ]
                    },
                    {
                        "id": 440,
                        "parentmenuid": 274,
                        "title": "Compat Cases",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 125,
                        "subMenuItems": []
                    },
                    {
                        "id": 439,
                        "parentmenuid": 274,
                        "title": "CCI Cases",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 146,
                        "subMenuItems": []
                    }
                ]
            }
        ]
    },
    {
        "id": 163,
        "parentmenuid": 0,
        "title": "Pitara",
        "apipath": "",
        "apipathfilter": "",
        "seq": 10,
        "subMenuItems": [
            {
                "id": 315,
                "parentmenuid": 163,
                "title": "TPRU ",
                "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/13/65/0/0/null",
                "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/13/65/0/0/null/@From_Date/@To_Date",
                "seq": 1,
                "subMenuItems": []
            },
            {
                "id": 316,
                "parentmenuid": 163,
                "title": "Service News ",
                "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/13/66/0/0/null",
                "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/13/66/0/0/null/@From_Date/@To_Date",
                "seq": 2,
                "subMenuItems": []
            },
            {
                "id": 317,
                "parentmenuid": 163,
                "title": "Promotion ",
                "apipath": "",
                "apipathfilter": "",
                "seq": 3,
                "subMenuItems": [
                    {
                        "id": 539,
                        "parentmenuid": 317,
                        "title": "CBEC PROMOTION",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/13/67/189/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/13/67/189/0/null/@From_Date/@To_Date",
                        "seq": 84,
                        "subMenuItems": []
                    },
                    {
                        "id": 540,
                        "parentmenuid": 317,
                        "title": "CBDT PROMOTION",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/13/67/190/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/13/67/190/0/null/@From_Date/@To_Date",
                        "seq": 85,
                        "subMenuItems": []
                    }
                ]
            },
            {
                "id": 318,
                "parentmenuid": 163,
                "title": "Transfer ",
                "apipath": "",
                "apipathfilter": "",
                "seq": 4,
                "subMenuItems": [
                    {
                        "id": 541,
                        "parentmenuid": 318,
                        "title": "CBEC",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/13/68/191/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/13/68/191/0/null/@From_Date/@To_Date",
                        "seq": 86,
                        "subMenuItems": []
                    },
                    {
                        "id": 542,
                        "parentmenuid": 318,
                        "title": "CBDT",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/13/68/192/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/13/68/192/0/null/@From_Date/@To_Date",
                        "seq": 87,
                        "subMenuItems": []
                    }
                ]
            },
            {
                "id": 319,
                "parentmenuid": 163,
                "title": "Deputation Posts ",
                "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/13/69/0/0/null",
                "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/13/69/0/0/null/@From_Date/@To_Date",
                "seq": 5,
                "subMenuItems": []
            },
            {
                "id": 320,
                "parentmenuid": 163,
                "title": "Cadre Review",
                "apipath": "",
                "apipathfilter": "",
                "seq": 6,
                "subMenuItems": [
                    {
                        "id": 543,
                        "parentmenuid": 320,
                        "title": "CBEC",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/13/70/193/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/13/70/193/0/null/@From_Date/@To_Date",
                        "seq": 88,
                        "subMenuItems": []
                    },
                    {
                        "id": 544,
                        "parentmenuid": 320,
                        "title": "CBDT",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/13/70/194/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/13/70/194/0/null/@From_Date/@To_Date",
                        "seq": 89,
                        "subMenuItems": []
                    }
                ]
            },
            {
                "id": 321,
                "parentmenuid": 163,
                "title": "Transfer Policy ",
                "apipath": "",
                "apipathfilter": "",
                "seq": 7,
                "subMenuItems": [
                    {
                        "id": 545,
                        "parentmenuid": 321,
                        "title": "CBEC",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/13/71/195/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/13/71/195/0/null/@From_Date/@To_Date",
                        "seq": 90,
                        "subMenuItems": []
                    },
                    {
                        "id": 546,
                        "parentmenuid": 321,
                        "title": "CBDT",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/13/71/196/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/13/71/196/0/null/@From_Date/@To_Date",
                        "seq": 91,
                        "subMenuItems": []
                    }
                ]
            },
            {
                "id": 322,
                "parentmenuid": 163,
                "title": "Training Circulars ",
                "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/13/72/0/0/null",
                "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/13/72/0/0/null/@From_Date/@To_Date",
                "seq": 8,
                "subMenuItems": []
            },
            {
                "id": 323,
                "parentmenuid": 163,
                "title": "Recruitment Rules ",
                "apipath": "",
                "apipathfilter": "",
                "seq": 9,
                "subMenuItems": [
                    {
                        "id": 547,
                        "parentmenuid": 323,
                        "title": "CBEC",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/13/73/197/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/13/73/197/0/null/@From_Date/@To_Date",
                        "seq": 92,
                        "subMenuItems": []
                    },
                    {
                        "id": 548,
                        "parentmenuid": 323,
                        "title": "CBDT",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/13/73/198/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/13/73/198/0/null/@From_Date/@To_Date",
                        "seq": 93,
                        "subMenuItems": []
                    },
                    {
                        "id": 549,
                        "parentmenuid": 323,
                        "title": "OTHER REVENUE BODIES",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 94,
                        "subMenuItems": []
                    },
                    {
                        "id": 550,
                        "parentmenuid": 323,
                        "title": "MISCELLANEOUS RRs ",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/13/73/200/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/13/73/200/0/null/@From_Date/@To_Date",
                        "seq": 95,
                        "subMenuItems": []
                    }
                ]
            },
            {
                "id": 324,
                "parentmenuid": 163,
                "title": "Pay Commission Report ",
                "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/13/74/0/0/null",
                "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/13/74/0/0/null/@From_Date/@To_Date",
                "seq": 10,
                "subMenuItems": []
            },
            {
                "id": 325,
                "parentmenuid": 163,
                "title": "Service Case Laws",
                "apipath": "",
                "apipathfilter": "",
                "seq": 11,
                "subMenuItems": [
                    {
                        "id": 551,
                        "parentmenuid": 325,
                        "title": "SC Case Laws ",
                        "apipath": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPage/13/75/201/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPagefilter/13/75/201/0/null/@From_Date/@To_Date",
                        "seq": 96,
                        "subMenuItems": []
                    },
                    {
                        "id": 552,
                        "parentmenuid": 325,
                        "title": "HC Case Laws ",
                        "apipath": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPage/13/75/202/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPagefilter/13/75/202/0/null/@From_Date/@To_Date",
                        "seq": 97,
                        "subMenuItems": []
                    },
                    {
                        "id": 553,
                        "parentmenuid": 325,
                        "title": "CIC Orders",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 98,
                        "subMenuItems": []
                    },
                    {
                        "id": 554,
                        "parentmenuid": 325,
                        "title": "Central Administrative Tribunal ",
                        "apipath": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPage/13/75/204/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/CaselawIndexPage/GetCaselawIndexPagefilter/13/75/204/0/null/@From_Date/@To_Date",
                        "seq": 99,
                        "subMenuItems": []
                    },
                    {
                        "id": 555,
                        "parentmenuid": 325,
                        "title": "Lower Court Order ",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 100,
                        "subMenuItems": []
                    }
                ]
            },
            {
                "id": 326,
                "parentmenuid": 163,
                "title": "THE INSIDER ",
                "apipath": "",
                "apipathfilter": "",
                "seq": 12,
                "subMenuItems": []
            },
            {
                "id": 327,
                "parentmenuid": 163,
                "title": "MISC",
                "apipath": "",
                "apipathfilter": "",
                "seq": 13,
                "subMenuItems": [
                    {
                        "id": 556,
                        "parentmenuid": 327,
                        "title": "ALLOWANCES/ENTITLEMENTS ",
                        "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/13/77/206/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/13/77/206/0/null/@From_Date/@To_Date",
                        "seq": 101,
                        "subMenuItems": []
                    },
                    {
                        "id": 557,
                        "parentmenuid": 327,
                        "title": "CABINET/ACC",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 102,
                        "subMenuItems": []
                    },
                    {
                        "id": 558,
                        "parentmenuid": 327,
                        "title": "CAREER",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 103,
                        "subMenuItems": []
                    },
                    {
                        "id": 559,
                        "parentmenuid": 327,
                        "title": "DISALLOWANCE",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 104,
                        "subMenuItems": []
                    },
                    {
                        "id": 560,
                        "parentmenuid": 327,
                        "title": "EXPENDITURE GUIDELINES",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 105,
                        "subMenuItems": []
                    },
                    {
                        "id": 561,
                        "parentmenuid": 327,
                        "title": "LEAVE RULES",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 106,
                        "subMenuItems": []
                    },
                    {
                        "id": 562,
                        "parentmenuid": 327,
                        "title": "TRAVEL POLICY ",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 107,
                        "subMenuItems": []
                    },
                    {
                        "id": 563,
                        "parentmenuid": 327,
                        "title": "RULES BASKET ",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 108,
                        "subMenuItems": []
                    },
                    {
                        "id": 564,
                        "parentmenuid": 327,
                        "title": "VIGILANCE/DISCIPLINARY PROCEEDINGS",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 109,
                        "subMenuItems": [
                            {
                                "id": 707,
                                "parentmenuid": 564,
                                "title": "CBIC + CBDT ORDERS",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 30,
                                "subMenuItems": []
                            },
                            {
                                "id": 708,
                                "parentmenuid": 564,
                                "title": "VIGILANCE DISCIPLINARY PROCEEDINGS ",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 31,
                                "subMenuItems": []
                            }
                        ]
                    },
                    {
                        "id": 565,
                        "parentmenuid": 327,
                        "title": "WELFARE SCHEMES ",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 110,
                        "subMenuItems": []
                    },
                    {
                        "id": 566,
                        "parentmenuid": 327,
                        "title": "GOVERNMENT HOLIDAYS",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 111,
                        "subMenuItems": []
                    },
                    {
                        "id": 567,
                        "parentmenuid": 327,
                        "title": "SPECIAL/TEMPORARY ORDERS",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 112,
                        "subMenuItems": []
                    },
                    {
                        "id": 568,
                        "parentmenuid": 327,
                        "title": "ALL INDIA SERVICES + CAT JURISDICTION ",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 113,
                        "subMenuItems": []
                    },
                    {
                        "id": 569,
                        "parentmenuid": 327,
                        "title": "IGAS2 ",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 114,
                        "subMenuItems": []
                    },
                    {
                        "id": 570,
                        "parentmenuid": 327,
                        "title": "DoP&T DOCUMENTS ",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 115,
                        "subMenuItems": []
                    },
                    {
                        "id": 571,
                        "parentmenuid": 327,
                        "title": "ACTION PLAN + MEDIA GUIDELINES ",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 116,
                        "subMenuItems": [
                            {
                                "id": 709,
                                "parentmenuid": 571,
                                "title": "CBDT CENTRAL ACTION PLAN",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 32,
                                "subMenuItems": []
                            },
                            {
                                "id": 710,
                                "parentmenuid": 571,
                                "title": "MEDIA GUIDELINES",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 33,
                                "subMenuItems": []
                            },
                            {
                                "id": 711,
                                "parentmenuid": 571,
                                "title": "OFFICE MEMORANDUM ",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 34,
                                "subMenuItems": []
                            }
                        ]
                    },
                    {
                        "id": 572,
                        "parentmenuid": 327,
                        "title": "ACCOMMODATION ",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 117,
                        "subMenuItems": []
                    },
                    {
                        "id": 573,
                        "parentmenuid": 327,
                        "title": "CBEC - RFD ",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 118,
                        "subMenuItems": []
                    },
                    {
                        "id": 574,
                        "parentmenuid": 327,
                        "title": "Action on TARC Reports",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 119,
                        "subMenuItems": []
                    },
                    {
                        "id": 575,
                        "parentmenuid": 327,
                        "title": "Infrastructure",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 120,
                        "subMenuItems": []
                    },
                    {
                        "id": 576,
                        "parentmenuid": 327,
                        "title": "Lateral Entry ",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 121,
                        "subMenuItems": []
                    }
                ]
            }
        ]
    },
    {
        "id": 160,
        "parentmenuid": 0,
        "title": "Budget",
        "apipath": "",
        "apipathfilter": "",
        "seq": 11,
        "subMenuItems": [
            {
                "id": 290,
                "parentmenuid": 160,
                "title": "Budget Speech",
                "apipath": "http://54.227.115.248:8081/api/PdfBlob/GetPdfBlobIndexPage/10/40/0/0/null",
                "apipathfilter": "http://54.227.115.248:8081/api/PdfBlob/GetPdfBlobIndexPagefilter/10/40/0/0/null/@From_Date/@To_Date",
                "seq": 31,
                "subMenuItems": []
            },
            {
                "id": 291,
                "parentmenuid": 160,
                "title": "Union Budget",
                "apipath": "",
                "apipathfilter": "",
                "seq": 32,
                "subMenuItems": [
                    {
                        "id": 497,
                        "parentmenuid": 291,
                        "title": "Budget Analysis ",
                        "apipath": "http://54.227.115.248:8081/api/PdfBlob/GetPdfBlobIndexPage/10/41/147/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/PdfBlob/GetPdfBlobIndexPagefilter/10/41/147/0/null/@From_Date/@To_Date",
                        "seq": 75,
                        "subMenuItems": []
                    },
                    {
                        "id": 498,
                        "parentmenuid": 291,
                        "title": "Notifications",
                        "apipath": "http://54.227.115.248:8081/api/PdfBlob/GetPdfBlobIndexPage/10/41/148/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/PdfBlob/GetPdfBlobIndexPagefilter/10/41/148/0/null/@From_Date/@To_Date",
                        "seq": 76,
                        "subMenuItems": []
                    },
                    {
                        "id": 499,
                        "parentmenuid": 291,
                        "title": "Budget at a Glance",
                        "apipath": "http://54.227.115.248:8081/api/PdfBlob/GetPdfBlobIndexPage/10/41/149/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/PdfBlob/GetPdfBlobIndexPagefilter/10/41/149/0/null/@From_Date/@To_Date",
                        "seq": 77,
                        "subMenuItems": []
                    },
                    {
                        "id": 500,
                        "parentmenuid": 291,
                        "title": "Expenditure Budget",
                        "apipath": "http://54.227.115.248:8081/api/PdfBlob/GetPdfBlobIndexPage/10/41/150/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/PdfBlob/GetPdfBlobIndexPagefilter/10/41/150/0/null/@From_Date/@To_Date",
                        "seq": 78,
                        "subMenuItems": []
                    },
                    {
                        "id": 501,
                        "parentmenuid": 291,
                        "title": "Demands for Grants of Central vernment",
                        "apipath": "http://54.227.115.248:8081/api/PdfBlob/GetPdfBlobIndexPage/10/41/151/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/PdfBlob/GetPdfBlobIndexPagefilter/10/41/151/0/null/@From_Date/@To_Date",
                        "seq": 79,
                        "subMenuItems": []
                    },
                    {
                        "id": 502,
                        "parentmenuid": 291,
                        "title": "Annual Financial Statement",
                        "apipath": "http://54.227.115.248:8081/api/PdfBlob/GetPdfBlobIndexPage/10/41/152/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/PdfBlob/GetPdfBlobIndexPagefilter/10/41/152/0/null/@From_Date/@To_Date",
                        "seq": 80,
                        "subMenuItems": []
                    }
                ]
            },
            {
                "id": 292,
                "parentmenuid": 160,
                "title": "Economic Survey",
                "apipath": "http://54.227.115.248:8081/api/PdfBlob/GetPdfBlobIndexPage/10/42/0/0/null",
                "apipathfilter": "http://54.227.115.248:8081/api/PdfBlob/GetPdfBlobIndexPagefilter/10/42/0/0/null/@From_Date/@To_Date",
                "seq": 33,
                "subMenuItems": []
            },
            {
                "id": 293,
                "parentmenuid": 160,
                "title": "TRU D.O. Letters",
                "apipath": "http://54.227.115.248:8081/api/PdfBlob/GetPdfBlobIndexPage/10/43/0/0/null",
                "apipathfilter": "http://54.227.115.248:8081/api/PdfBlob/GetPdfBlobIndexPagefilter/10/43/0/0/null/@From_Date/@To_Date",
                "seq": 34,
                "subMenuItems": []
            },
            {
                "id": 294,
                "parentmenuid": 160,
                "title": "Finance Acts",
                "apipath": "http://54.227.115.248:8081/api/PdfBlob/GetPdfBlobIndexPage/10/44/0/0/null",
                "apipathfilter": "http://54.227.115.248:8081/api/PdfBlob/GetPdfBlobIndexPagefilter/10/44/0/0/null/@From_Date/@To_Date",
                "seq": 35,
                "subMenuItems": []
            },
            {
                "id": 295,
                "parentmenuid": 160,
                "title": "FINANCE BILL",
                "apipath": "http://54.227.115.248:8081/api/PdfBlob/GetPdfBlobIndexPage/10/45/0/0/null",
                "apipathfilter": "http://54.227.115.248:8081/api/PdfBlob/GetPdfBlobIndexPagefilter/10/45/0/0/null/@From_Date/@To_Date",
                "seq": 36,
                "subMenuItems": []
            },
            {
                "id": 296,
                "parentmenuid": 160,
                "title": "BUDGET CIRCULAR",
                "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/10/46/0/0/null",
                "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/10/46/0/0/null/@From_Date/@To_Date",
                "seq": 37,
                "subMenuItems": []
            },
            {
                "id": 297,
                "parentmenuid": 160,
                "title": "Finance Commission",
                "apipath": "",
                "apipathfilter": "",
                "seq": 38,
                "subMenuItems": [
                    {
                        "id": 503,
                        "parentmenuid": 297,
                        "title": "Fourteenth Finance Commission",
                        "apipath": "http://54.227.115.248:8081/api/PdfBlob/GetPdfBlobIndexPage/10/47/153/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/PdfBlob/GetPdfBlobIndexPagefilter/10/47/153/0/null/@From_Date/@To_Date",
                        "seq": 81,
                        "subMenuItems": []
                    },
                    {
                        "id": 504,
                        "parentmenuid": 297,
                        "title": "Thirteenth Finance Commission",
                        "apipath": "http://54.227.115.248:8081/api/PdfBlob/GetPdfBlobIndexPage/10/47/154/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/PdfBlob/GetPdfBlobIndexPagefilter/10/47/154/0/null/@From_Date/@To_Date",
                        "seq": 82,
                        "subMenuItems": []
                    },
                    {
                        "id": 505,
                        "parentmenuid": 297,
                        "title": "Twelfth Finance Commission",
                        "apipath": "http://54.227.115.248:8081/api/PdfBlob/GetPdfBlobIndexPage/10/47/155/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/PdfBlob/GetPdfBlobIndexPagefilter/10/47/155/0/null/@From_Date/@To_Date",
                        "seq": 83,
                        "subMenuItems": []
                    }
                ]
            }
        ]
    },
    {
        "id": 161,
        "parentmenuid": 0,
        "title": "Library",
        "apipath": "",
        "apipathfilter": "",
        "seq": 11,
        "subMenuItems": [
            {
                "id": 298,
                "parentmenuid": 161,
                "title": "Direct Tax",
                "apipath": "",
                "apipathfilter": "",
                "seq": 27,
                "subMenuItems": [
                    {
                        "id": 506,
                        "parentmenuid": 298,
                        "title": "ACT",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 65,
                        "subMenuItems": [
                            {
                                "id": 678,
                                "parentmenuid": 506,
                                "title": "Interest-Tax Act, 1974 ",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 1,
                                "subMenuItems": []
                            },
                            {
                                "id": 679,
                                "parentmenuid": 506,
                                "title": "Wealth Tax ",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 2,
                                "subMenuItems": []
                            },
                            {
                                "id": 680,
                                "parentmenuid": 506,
                                "title": "Transfer of Property ",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 3,
                                "subMenuItems": []
                            }
                        ]
                    },
                    {
                        "id": 507,
                        "parentmenuid": 298,
                        "title": "Circulars",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 66,
                        "subMenuItems": [
                            {
                                "id": 681,
                                "parentmenuid": 507,
                                "title": "TDS on Salary ",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 4,
                                "subMenuItems": []
                            }
                        ]
                    },
                    {
                        "id": 508,
                        "parentmenuid": 298,
                        "title": "Order",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 67,
                        "subMenuItems": [
                            {
                                "id": 682,
                                "parentmenuid": 508,
                                "title": "ITAT",
                                "apipath": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPages/11/48/158/82/null",
                                "apipathfilter": "http://54.227.115.248:8081/api/NotificationIndexPage/GetNotificationIndexPagesfilter/11/48/158/82/null/@From_Date/@To_Date",
                                "seq": 5,
                                "subMenuItems": []
                            }
                        ]
                    },
                    {
                        "id": 509,
                        "parentmenuid": 298,
                        "title": "Miscellaneous ",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 68,
                        "subMenuItems": [
                            {
                                "id": 683,
                                "parentmenuid": 509,
                                "title": "Cost Index ",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 6,
                                "subMenuItems": []
                            },
                            {
                                "id": 684,
                                "parentmenuid": 509,
                                "title": "Settlement Rules ",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 7,
                                "subMenuItems": []
                            }
                        ]
                    },
                    {
                        "id": 510,
                        "parentmenuid": 298,
                        "title": "FORMS ",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 69,
                        "subMenuItems": [
                            {
                                "id": 685,
                                "parentmenuid": 510,
                                "title": "Instructions",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 8,
                                "subMenuItems": []
                            },
                            {
                                "id": 686,
                                "parentmenuid": 510,
                                "title": "Form",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 9,
                                "subMenuItems": []
                            }
                        ]
                    },
                    {
                        "id": 511,
                        "parentmenuid": 298,
                        "title": "REPORT ",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 70,
                        "subMenuItems": [
                            {
                                "id": 687,
                                "parentmenuid": 511,
                                "title": "GAAR REPORT ",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 10,
                                "subMenuItems": []
                            },
                            {
                                "id": 688,
                                "parentmenuid": 511,
                                "title": "Taxpayer Data",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 11,
                                "subMenuItems": []
                            },
                            {
                                "id": 689,
                                "parentmenuid": 511,
                                "title": "Rangachary Report ",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 12,
                                "subMenuItems": []
                            }
                        ]
                    },
                    {
                        "id": 512,
                        "parentmenuid": 298,
                        "title": "Bill",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 71,
                        "subMenuItems": [
                            {
                                "id": 690,
                                "parentmenuid": 512,
                                "title": "DTC Bill ",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 13,
                                "subMenuItems": []
                            }
                        ]
                    }
                ]
            },
            {
                "id": 299,
                "parentmenuid": 161,
                "title": "INDIRECT TAXES ",
                "apipath": "",
                "apipathfilter": "",
                "seq": 28,
                "subMenuItems": [
                    {
                        "id": 513,
                        "parentmenuid": 299,
                        "title": "ACT",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 58,
                        "subMenuItems": [
                            {
                                "id": 691,
                                "parentmenuid": 513,
                                "title": "Central Excise  Act ,1944",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 14,
                                "subMenuItems": []
                            },
                            {
                                "id": 692,
                                "parentmenuid": 513,
                                "title": "Central Excise Tariff Act ,1985",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 15,
                                "subMenuItems": []
                            },
                            {
                                "id": 693,
                                "parentmenuid": 513,
                                "title": "Customs Act,1962",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 16,
                                "subMenuItems": []
                            },
                            {
                                "id": 694,
                                "parentmenuid": 513,
                                "title": "Customs Tariff Act,1975",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 17,
                                "subMenuItems": []
                            }
                        ]
                    },
                    {
                        "id": 514,
                        "parentmenuid": 299,
                        "title": "Show Cause Tips",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 59,
                        "subMenuItems": []
                    },
                    {
                        "id": 515,
                        "parentmenuid": 299,
                        "title": "Rights in Raids",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 60,
                        "subMenuItems": []
                    },
                    {
                        "id": 516,
                        "parentmenuid": 299,
                        "title": "CUSTOMS MANUAL",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 61,
                        "subMenuItems": []
                    },
                    {
                        "id": 517,
                        "parentmenuid": 299,
                        "title": "ST Accounting Head",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 62,
                        "subMenuItems": []
                    },
                    {
                        "id": 518,
                        "parentmenuid": 299,
                        "title": "Central Excise Manual",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 63,
                        "subMenuItems": []
                    },
                    {
                        "id": 519,
                        "parentmenuid": 299,
                        "title": "Integrated CX & ST Audit Manual",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 64,
                        "subMenuItems": [
                            {
                                "id": 695,
                                "parentmenuid": 519,
                                "title": "C.Ex. Annexures",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 18,
                                "subMenuItems": []
                            },
                            {
                                "id": 696,
                                "parentmenuid": 519,
                                "title": "CESTAM-2015 ",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 19,
                                "subMenuItems": []
                            },
                            {
                                "id": 697,
                                "parentmenuid": 519,
                                "title": "CESTAM-2015 - Manual",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 20,
                                "subMenuItems": []
                            },
                            {
                                "id": 698,
                                "parentmenuid": 519,
                                "title": "Service Tax Annexures",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 21,
                                "subMenuItems": []
                            }
                        ]
                    }
                ]
            },
            {
                "id": 300,
                "parentmenuid": 161,
                "title": "Exim Corner",
                "apipath": "",
                "apipathfilter": "",
                "seq": 29,
                "subMenuItems": [
                    {
                        "id": 520,
                        "parentmenuid": 300,
                        "title": "Thailand FTA ",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 65,
                        "subMenuItems": []
                    },
                    {
                        "id": 521,
                        "parentmenuid": 300,
                        "title": "Indo-Lanka Trade ",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 66,
                        "subMenuItems": []
                    },
                    {
                        "id": 522,
                        "parentmenuid": 300,
                        "title": "Pact with Ceylon ",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 67,
                        "subMenuItems": []
                    },
                    {
                        "id": 523,
                        "parentmenuid": 300,
                        "title": "Quarantine Rules ",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 68,
                        "subMenuItems": []
                    },
                    {
                        "id": 524,
                        "parentmenuid": 300,
                        "title": "CECA with Singapore ",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 69,
                        "subMenuItems": [
                            {
                                "id": 699,
                                "parentmenuid": 524,
                                "title": "Agreement",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 22,
                                "subMenuItems": []
                            },
                            {
                                "id": 700,
                                "parentmenuid": 524,
                                "title": "Annexes",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 23,
                                "subMenuItems": []
                            },
                            {
                                "id": 701,
                                "parentmenuid": 524,
                                "title": "Protocol",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 24,
                                "subMenuItems": []
                            }
                        ]
                    },
                    {
                        "id": 525,
                        "parentmenuid": 300,
                        "title": "India-Asean FTA ",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 70,
                        "subMenuItems": [
                            {
                                "id": 702,
                                "parentmenuid": 525,
                                "title": "Protocol to amend the Framework Agreement",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 25,
                                "subMenuItems": []
                            },
                            {
                                "id": 703,
                                "parentmenuid": 525,
                                "title": "Agreement on Dispute Settlement Mechanism",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 26,
                                "subMenuItems": []
                            },
                            {
                                "id": 704,
                                "parentmenuid": 525,
                                "title": "Trade in ods Agreement",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 27,
                                "subMenuItems": []
                            },
                            {
                                "id": 705,
                                "parentmenuid": 525,
                                "title": "Understanding on Article 4 of the Trade in ods Agreement",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 28,
                                "subMenuItems": []
                            },
                            {
                                "id": 706,
                                "parentmenuid": 525,
                                "title": "Country-wise Schedules",
                                "apipath": "",
                                "apipathfilter": "",
                                "seq": 29,
                                "subMenuItems": []
                            }
                        ]
                    },
                    {
                        "id": 526,
                        "parentmenuid": 300,
                        "title": "India Malaysia Agreement ",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 71,
                        "subMenuItems": []
                    }
                ]
            },
            {
                "id": 301,
                "parentmenuid": 161,
                "title": "Archive",
                "apipath": "",
                "apipathfilter": "",
                "seq": 30,
                "subMenuItems": [
                    {
                        "id": 527,
                        "parentmenuid": 301,
                        "title": "DDT Archive",
                        "apipath": "http://54.227.115.248:8081/api/NewsIndexPage/GetNewsIndexPages/11/51/177/0/null",
                        "apipathfilter": "http://54.227.115.248:8081/api/NewsIndexPage/GetNewsIndexPagesfilter/11/51/177/0/null/@From_Date/@To_Date",
                        "seq": 72,
                        "subMenuItems": []
                    },
                    {
                        "id": 528,
                        "parentmenuid": 301,
                        "title": "The Constitution Of India",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 73,
                        "subMenuItems": []
                    },
                    {
                        "id": 529,
                        "parentmenuid": 301,
                        "title": "Tax Archive",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 74,
                        "subMenuItems": []
                    },
                    {
                        "id": 530,
                        "parentmenuid": 301,
                        "title": "Expert Panel Report",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 75,
                        "subMenuItems": []
                    },
                    {
                        "id": 531,
                        "parentmenuid": 301,
                        "title": "All Acts",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 76,
                        "subMenuItems": []
                    },
                    {
                        "id": 532,
                        "parentmenuid": 301,
                        "title": "Misc Reports",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 77,
                        "subMenuItems": []
                    },
                    {
                        "id": 533,
                        "parentmenuid": 301,
                        "title": "Foreign Trade Policy",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 78,
                        "subMenuItems": []
                    },
                    {
                        "id": 534,
                        "parentmenuid": 301,
                        "title": "Book Review",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 79,
                        "subMenuItems": []
                    },
                    {
                        "id": 535,
                        "parentmenuid": 301,
                        "title": "CST",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 80,
                        "subMenuItems": []
                    },
                    {
                        "id": 536,
                        "parentmenuid": 301,
                        "title": "Saving Scheme",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 81,
                        "subMenuItems": []
                    },
                    {
                        "id": 537,
                        "parentmenuid": 301,
                        "title": "NDPS",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 82,
                        "subMenuItems": []
                    },
                    {
                        "id": 538,
                        "parentmenuid": 301,
                        "title": "Gold",
                        "apipath": "",
                        "apipathfilter": "",
                        "seq": 83,
                        "subMenuItems": []
                    }
                ]
            }
        ]
    }
]

// https://github.com/Digiappstores/reactcompokit/blob/master/src/Pages/inputbox.js
// https://github.com/Digiappstores/reactcompokit/blob/master/src/Components/TextField/index.js
export const sourceRoute = [
    {
        route: "/typography",
        pageSource: "Pages/typography.js",
        componentSource: null,
    },
    {
        route: "/button",
        pageSource: "Pages/button.js",
        componentSource: "Components/Button/index.js",
    },
    {
        route: "/inputbox",
        pageSource: "Pages/inputbox.js",
        componentSource: "Components/TextField/index.js",
    },
    {
        route: "/otp",
        pageSource: "Pages/otp.js",
        componentSource: "Components/Otp/index.js",
    },
    {
        route: "/selectbox",
        pageSource: "Pages/selectbox.js",
        componentSource: null,
    },
    {
        route: "/uploadbox",
        pageSource: "Pages/uploadbox.js",
        componentSource: null,
    },
    { route: "/Modal", pageSource: "Pages/modal.js", componentSource: null },
    {
        route: "/tabs",
        pageSource: "Pages/tabs.js",
        componentSource: "Components/customTabs/index.js",
    },
    { route: "/example", pageSource: "Pages/Example", componentSource: null },
    {
        route: "/accordian",
        pageSource: "Pages/accordion.js",
        componentSource: "Components/Accordion/index.js",
    },
    {
        route: "/datepicker",
        pageSource: "Pages/datepicker",
        componentSource: "Components/DatePicker/index.js",
    },
    {
        route: "/checkboxes",
        pageSource: "Pages/checkboxes.js",
        componentSource: "Components/Checkbox/index.js",
    },
    {
        route: "/checkbox-as-button",
        pageSource: "Pages/checkboxAsButton.js",
        componentSource: "Components/CheckboxAsButton/index.js",
    },
    {
        route: "/slider",
        pageSource: "Pages/slider.js",
        componentSource: "Components/Slider/index.js",
    },
    {
        route: "/radio-buttons",
        pageSource: "Pages/radioButtons.js",
        componentSource: "Components/RadioButtons/index.js",
    },
    {
        route: "/inline-edit",
        pageSource: "Pages/nameInline.js",
        componentSource: "Components/InlineValueEdit/index.js",
    },
    {
        route: "/quantity",
        pageSource: "Pages/quantity.js",
        componentSource: "Components/Quantity/index.js",
    },
    {
        route: "/map",
        pageSource: "Pages/googleMap.js",
        componentSource: "Components/GoogleMap/index.js",
    },
    {
        route: "/social-icons",
        pageSource: "Pages/socialIcons.js",
        componentSource: "Components/SocialIcons/index.js",
    },
    {
        route: "/offline-online",
        pageSource: "Pages/onlineOffline.js",
        componentSource: "Components/OnlineOffline/index.js",
    },
    {
        route: "/image-card-view",
        pageSource: "Pages/imageCardView.js",
        componentSource: "Components/ImageCardView/index.js",
    },
];

export const getPageUrl = (type, routeName) => {
    const currrentObj = sourceRoute.filter((option) => option.route == routeName);
    var githubUrl =
        "https://github.com/Digiappstores/reactcompokit/blob/master/src/";

    return currrentObj.length > 0
        ? type == "componentSource" && currrentObj[0]["componentSource"] == null
            ? null
            : githubUrl + currrentObj[0][type]
        : null;
};

// talib component

export const defaultImage =
    "https://images.unsplash.com/photo-1663834191004-4e23be2710b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";
