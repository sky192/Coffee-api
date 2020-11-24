const states = [{
            id: "1",
            name: "Alabama",
            abv: "AL",
            capital: "Montgomery",
            largest_city: "Birmingham",
            admitted_to_union: "December 14, 1819",
            population: "4,903,185",
            flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Alabama.svg"
        }, {
            id: "2",
            name: "Alaska",
            abv: "AK",
            capital: "Juneau",
            largest_city: "Anchorage",
            admitted_to_union: "January 3, 1959",
            population: "710,249",
            flag: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Alaska.svg"
        }, {
            id: "3",
            name: "Arizona",
            abv: "AZ",
            capital: "Phoenix",
            largest_city: "Phoenix",
            admitted_to_union: "February 14, 1912",
            population: "7,278,717",
            flag: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arizona.svg"
        }, {
            id: "4",
            name: "Arkansas",
            abv: "AR",
            capital: "Little Rock",
            largest_city: "Little Rock",
            admitted_to_union: "June 15, 1836",
            population: "3,017,804",
            flag: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg"
        }, {
            id: "5",
            name: "California",
            abv: "CA",
            capital: "Sacramento",
            largest_city: "Los Angeles",
            admitted_to_union: "September 9, 1850",
            population: "39,512,223",
            flag: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg"
        }, {
            id: "6",
            name: "Colorado",
            abv: "CO",
            capital: "Denver",
            largest_city: "Denver",
            admitted_to_union: "August 1, 1876",
            population: "5,758,736",
            flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colorado_designed_by_Andrew_Carlisle_Carson.svg"
        }, {
            id: "7",
            name: "Connecticut",
            abv: "CT",
            capital: "Hartford",
            largest_city: "Bridgeport",
            admitted_to_union: "January 9, 1788",
            population: "3,565,287",
            flag: "https://upload.wikimedia.org/wikipedia/commons/9/96/Flag_of_Connecticut.svg"
        }, {
            id: "8",
            name: "Delaware",
            abv: "DE",
            capital: "Dover",
            largest_city: "Wilmington",
            admitted_to_union: "December 7, 1787",
            population: "973,764",
            flag: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Flag_of_Delaware.svg"
        }, {
            id: "9",
            name: "Florida",
            abv: "FL",
            capital: "Tallahassee",
            largest_city: "Jacksonville",
            admitted_to_union: "March 3, 1845",
            population: "21,477,737",
            flag: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg"
        }, {
            id: "10",
            name: "Georgia",
            abv: "GA",
            capital: "Atlanta",
            largest_city: "Atlanta",
            admitted_to_union: "January 2, 1788",
            population: "10,617,423",
            flag: "https://upload.wikimedia.org/wikipedia/commons/5/54/Flag_of_Georgia_%28U.S._state%29.svg"
        }, {
            id: "11",
            name: "Hawaii",
            abv: "HI",
            capital: "Honolulu",
            largest_city: "Honolulu",
            admitted_to_union: "August 21, 1959",
            population: "1,415,872",
            flag: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Hawaii.svg"
        }, {
            id: "12",
            name: "Idaho",
            abv: "ID",
            capital: "Boise",
            largest_city: "Boise",
            admitted_to_union: "July 3, 1890",
            population: "1,787,065",
            flag: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_Idaho.svg"
        }, {
            id: "13",
            name: "Illinois",
            abv: "IL",
            capital: "Springfield",
            largest_city: "Chicago",
            admitted_to_union: "December 3, 1818",
            population: "12,671,821",
            flag: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Illinois.svg"
        }, {
            id: "14",
            name: "Indiana",
            abv: "IN",
            capital: "Indianapolis",
            largest_city: "Indianapolis",
            admitted_to_union: "December 11, 1816",
            population: "6,732,219",
            flag: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Flag_of_Indiana.svg"
        }, {
            id: "15",
            name: "Iowa",
            abv: "IA",
            capital: "Des Moines",
            largest_city: "Des Moines",
            admitted_to_union: "December 27, 1846",
            population: "3,155,070",
            flag: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Iowa.svg"
        }, {
            id: "16",
            name: "Kansas",
            abv: "KS",
            capital: "Topeka",
            largest_city: "Wichita",
            admitted_to_union: "January 29, 1861",
            population: "2,913,314",
            flag: "https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Kansas.svg"
        }, {
            id: "17",
            name: "Kentucky",
            abv: "KY",
            capital: "Frankfort",
            largest_city: "Louisville",
            admitted_to_union: "June 1, 1792",
            population: "4,467,673",
            flag: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Flag_of_Kentucky.svg"
        }, {
            id: "18",
            name: "Louisiana",
            abv: "LA",
            capital: "Baton Rouge",
            largest_city: "New Orleans",
            admitted_to_union: "April 30, 1812",
            population: "4,648,794",
            flag: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Flag_of_Louisiana.svg"
        }, {
            id: "19",
            name: "Maine",
            abv: "ME",
            capital: "Augusta",
            largest_city: "Portland",
            admitted_to_union: "March 15, 1820",
            population: "1,344,212",
            flag: "https://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_Maine.svg"
        }, {
            id: "20",
            name: "Maryland",
            abv: "MD",
            capital: "Annapolis",
            largest_city: "Baltimore",
            admitted_to_union: "April 28, 1788",
            population: "6,045,680",
            flag: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Maryland.svg"
        }, {
            id: "21",
            name: "Massachusetts",
            abv: "MA",
            capital: "Boston",
            largest_city: "Boston",
            admitted_to_union: "February 6, 1788",
            population: "6,939,373",
            flag: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Massachusetts.svg"
        }, {
            id: "22",
            name: "Michigan",
            abv: "MI",
            capital: "Lansing",
            largest_city: "Detroit",
            admitted_to_union: "January 26, 1837",
            population: "9,883,635",
            flag: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Flag_of_Michigan.svg"
        }, {
            id: "23",
            name: "Minnesota",
            abv: "MN",
            capital: "Saint Paul",
            largest_city: "Minneapolis",
            admitted_to_union: "May 11, 1858",
            population: "5,639,632",
            flag: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Minnesota.svg"
        }, {
            id: "24",
            name: "Mississippi",
            abv: "MS",
            capital: "Jackson",
            largest_city: "Jackson",
            admitted_to_union: "December 10, 1817",
            population: "2,976,149",
            flag: "https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_Mississippi.svg"
        }, {
            id: "25",
            name: "Missouri",
            abv: "MO",
            capital: "Jefferson City",
            largest_city: "Kansas City",
            admitted_to_union: "August 10, 1821 ",
            population: "6,137,428",
            flag: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Flag_of_Missouri.svg"
        }, {
            id: "26",
            name: "Montana",
            abv: "MT",
            capital: "Helena",
            largest_city: "Billings",
            admitted_to_union: "November 8, 1889",
            population: "1,068,778",
            flag: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_Montana.svg"
        }, {
            id: "27",
            name: "Nebraska",
            abv: "NE",
            capital: "Lincoln",
            largest_city: "Omaha",
            admitted_to_union: "March 1, 1867 ",
            population: "1,934,408",
            flag: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Flag_of_Nebraska.svg"
        }, {
            id: "28",
            name: "Nevada",
            abv: "NV",
            capital: "Carson City",
            largest_city: "Las Vegas",
            admitted_to_union: "October 1, 1864",
            population: "3,080,156",
            flag: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Flag_of_Nevada.svg"
        }, {
            id: "29",
            name: "New Hampshire",
            abv: "NH",
            capital: "Concord",
            largest_city: "Manchester",
            admitted_to_union: "June 21, 1788",
            population: "1,359,711",
            flag: "https://upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_New_Hampshire.svg"
        }, {
            id: "30",
            name: "New Jersey",
            abv: "NJ",
            capital: "Trenton",
            largest_city: "Newark",
            admitted_to_union: "December 18, 1787",
            population: "8,882,190",
            flag: "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_New_Jersey.svg"
        }, {
            id: "31",
            name: "New Mexico",
            abv: "NM",
            capital: "Santa Fe",
            largest_city: "Albuquerque",
            admitted_to_union: "January 6, 1912",
            population: "2,096,829",
            flag: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_New_Mexico.svg"
        }, {
            id: "32",
            name: "New York",
            abv: "NY",
            capital: "Albany",
            largest_city: "New York",
            admitted_to_union: "July 26, 1788",
            population: "19,453,561",
            flag: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_New_York.svg"
        }, {
            id: "33",
            name: "North Carolina",
            abv: "NC",
            capital: "Raleigh",
            largest_city: "Charlotte",
            admitted_to_union: "November 21, 1789",
            population: "10,488,084",
            flag: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Flag_of_North_Carolina.svg"
        }, {
            id: "34",
            name: "North Dakota",
            abv: "ND",
            capital: "Bismark",
            largest_city: "Fargo",
            admitted_to_union: "November 2, 1889",
            population: "762,062",
            flag: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Flag_of_North_Dakota.svg"
        }, {
            id: "35",
            name: "Ohio",
            abv: "OH",
            capital: "Columbus",
            largest_city: "Columbus",
            admitted_to_union: "March 1, 1803",
            population: "11,689,100",
            flag: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Ohio.svg"
        }, {
            id: "36",
            name: "Oklahoma",
            abv: "OK",
            capital: "Oklahoma City",
            largest_city: "Oklahoma City",
            admitted_to_union: "November 16, 1907",
            population: "3,956,971",
            flag: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Flag_of_Oklahoma.svg"
        }, {
            id: "37",
            name: "Oregon",
            abv: "OR",
            capital: "Salem",
            largest_city: "Portland",
            admitted_to_union: "February 14, 1859",
            population: "4,217,737",
            flag: "https://en.wikipedia.org/wiki/Oregon#/media/File:Flag_of_Oregon.svg"
        }, {
            id: "38",
            name: "Pennsylvania",
            abv: "PA",
            capital: "Harrisburg",
            largest_city: "Philadelphia",
            admitted_to_union: "December 12, 1787",
            population: "12,801,989",
            flag: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Pennsylvania.svg"
        }, {
            id: "39",
            name: "Rhode Island",
            abv: "RI",
            capital: "Providence",
            largest_city: "Providence",
            admitted_to_union: "May 29, 1790",
            population: "1,059,361",
            flag: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Rhode_Island.svg"
        }, {
            id: "40",
            name: "South Carolina",
            abv: "SC",
            capital: "Columbia",
            largest_city: "Charleston",
            admitted_to_union: "May 23, 1788",
            population: "5,148,714",
            flag: "https://upload.wikimedia.org/wikipedia/commons/6/69/Flag_of_South_Carolina.svg"
        }, {
            id: "41",
            name: "South Dakota",
            abv: "SD",
            capital: "Pierre",
            largest_city: "Sioux Falls",
            admitted_to_union: "November 2, 1889",
            population: "884,659",
            flag: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_South_Dakota.svg"
        }, {
            id: "42",
            name: "Tennessee",
            abv: "TN",
            capital: "Nashville",
            largest_city: "Nashville",
            admitted_to_union: "June 1, 1796",
            population: "6,833,793",
            flag: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Tennessee.svg"
        }, {
            id: "43",
            name: "Texas",
            abv: "TX",
            capital: "Austin",
            largest_city: "Houston",
            admitted_to_union: "December 29, 1845",
            population: "28,995,881",
            flag: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg"
        }, {
            id: "44",
            name: "Utah",
            abv: "UT",
            capital: "Salt Lake City",
            largest_city: "Salt Lake City",
            admitted_to_union: "January 4, 1896",
            population: "3,205,958",
            flag: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Utah.svg"
        }, {
            id: "45",
            name: "Vermont",
            abv: "VT",
            capital: "Montpellier",
            largest_city: "Burlington",
            admitted_to_union: "March 4, 1791",
            population: "623,989",
            flag: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Vermont.svg"
        }, {
            id: "46",
            name: "Virginia",
            abv: "VA",
            capital: "Richmond",
            largest_city: "Virginia Beach",
            admitted_to_union: "June 25, 1788",
            population: "8,535,519",
            flag: "https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Virginia.svg"
        }, {
            id: "47",
            name: "Washington",
            abv: "WA",
            capital: "Olympia",
            largest_city: "Seattle",
            admitted_to_union: "November 11, 1889",
            population: "7,614,893",
            flag: "https://upload.wikimedia.org/wikipedia/commons/5/54/Flag_of_Washington.svg"
        }, {
            id: "48",
            name: "West Virginia",
            abv: "WV",
            capital: "Charleston",
            largest_city: "Charleston",
            admitted_to_union: "June 20, 1863",
            population: "1,792,147",
            flag: "https://upload.wikimedia.org/wikipedia/commons/2/22/Flag_of_West_Virginia.svg"
        }, {
            id: "49",
            name: "Wisconsin",
            abv: "WI",
            capital: "Madison",
            largest_city: "Milwaukee",
            admitted_to_union: "May 29, 1848",
            population: "5,822,434",
            flag: "https://upload.wikimedia.org/wikipedia/commons/2/22/Flag_of_Wisconsin.svg"
        }, {
            id: "50",
            name: "Wyoming",
            abv: "WY",
            capital: "Cheyenne",
            largest_city: "Cheyenne",
            admitted_to_union: "July 10, 1890",
            population: "578,759",
            flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Wyoming.svg"
        }]

        module.exports = states