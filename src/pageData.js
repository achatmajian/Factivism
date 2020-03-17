let pageData = {
    "issuesarray": [
        {
            "route": "abortion_stance",
            "name":"Abortion",
            "icon": "https://d3ky08o2dntqg3.cloudfront.net/news/images/issues/300/1160628722.jpg",
            "question":"What is your stance on abortion?",
            "side_yes": [
                "Pro-life",
                "Pro-life, but allow in cases of rape, incest, or danger to the mother or child",
                "Pro-life, and I also oppose abortion for victims of rape and incest"
            ],
            "side_no":[
                "Pro-choice",
                "Pro-choice, and providing birth control, sex education, and more social services will help reduce the number of abortions",
                "Pro-choice, but ban after the first three months"
            ]
        },
        {
            "route": "border_wall_stance",
            "name":"Border Wall",
            "icon": "https://d3ky08o2dntqg3.cloudfront.net/news/images/issues/300/2906282379.jpg",
            "question": "Should the United States build a wall along the southern border with Mexico?",
            "side_yes": [
                "Yes, and soon",
                "Yes, but make it a high-tech surveillance barrier instead of a physical one",
                "Yes, and Mexico should pay for it"
            ],
            "side_no":[
                "No, it's unnecessary",
                "No, this would be too costly and ineffective",
                "No, and we should adopt an open border policy"
            ]
        },
        {
            "route":"charter_schools_stance",
            "name":"Charter Schools",
            "icon": "https://d3ky08o2dntqg3.cloudfront.net/news/images/issues/300/3460197214.jpg",
            "question":"Do you support charter schools?",
            "side_yes":[
                "Yes, definitely",
                "Yes, but only if they are non-profit",
                "Yes, and our entire education system should be privatized"
            ],
            "side_no": [
                "No, they are ineffective",
                "No, we should focus on improving our public schools and increasing teacher wages instead",
                "No, and education should not be privatized"
            ]
        },
        {
            "route":"climate_change_stance",
            "name":"Climate Change",
            "icon": "https://d3ky08o2dntqg3.cloudfront.net/news/images/issues/300/1160596428.jpg",
            "question":"Should the government increase environmental regulations to prevent climate change?",
            "side_yes": [
                "Yes and quickly",
                "Yes, and provide more incentives for alternate energy production",
                "Yes, and work with other countries to form a climate change coalition"
            ], 
            "side_no": [
                "No, there's no point",
                "No, provide more incentives for alternative energy production instead",
                "No, and global warming is a natural occurrence"
            ]
        },
        {
            "route": "gun_control_stance",
            "name": "Gun Control",
            "icon": "https://d3ky08o2dntqg3.cloudfront.net/news/images/issues/300/241281060.jpg",
            "question": "Should there be more restrictions on the current process of purchasing a gun?",
            "side_yes": [
                "Yes, gun laws are too lax",
                "Yes, require strict background checks, psychological testing, and training",
                "Yes, and ban all guns from public use"
            ],
            "side_no": [
                "No, the second Amendment is there for a reason",
                "No, only for criminals and the mentally ill",
                "No, only for assault weapons"
            ]
        },
        {
            "route": "obamacare_stance",
            "name": "Obamacare",
            "icon": "https://d3ky08o2dntqg3.cloudfront.net/news/images/issues/300/1160618003.jpg",
            "question": "Do you support the Patient Protection and Affordable Care Act (Obamacare)?",
            "side_yes": [
                "Yes, it was a step in the right direction",
                "Yes, but a mandatory single payer system would be even better",
                "Yes, and allow consumers to choose providers and import pharmaceuticals from other countries"
            ],
            "side_no": [
                "No, it was pointless",
                "No, open the markets so insurers can compete across state lines and reduce costs",
                "No, government should not be involved in healthcare"
            ]
        },
        {
            "route": "student_loans_stance",
            "name": "Student Loans",
            "icon": "https://d3ky08o2dntqg3.cloudfront.net/news/images/issues/300/721303524.jpg",
            "question": "Do you support increasing taxes for the rich in order to reduce interest rates for student loans?",
            "side_yes": [
                "Yes, but tuition needs regulated as well",
                "Yes, and increase government funding so every student receives a free college education",
                "Yes, and encourage economic stimulus from the middle class"
            ],
            "side_no": [
                "No, loans are meant to be paid back",
                "No, and transition all current government student loans into privately managed accounts",
                "No, but we should still reduce interest rates for student loans"
            ]
        },
        {
            "route": "marijuana_stance",
            "name": "Marijuana",
            "icon": "https://d3ky08o2dntqg3.cloudfront.net/news/images/issues/300/235662864.jpg",
            "question": "Do you support the legalization of Marijuana?",
            "side_yes": [
                "Yes, for all purposes, including recreational",
                "Yes, but only for medical use",
                "Yes, and immediately release anyone serving time solely for drug offenses"
            ],
            "side_no": [
                "No, that would be a dangerous precedent",
                "No, and increase penalties for non-violent drug offenders",
                "No, and invoke stricter penalties for all drug use"
            ]
        },
        {
            "route": "israel_stance",
            "name": "Israel",
            "icon": "https://d3ky08o2dntqg3.cloudfront.net/news/images/issues/300/235662821.jpg",
            "question": "Should the United States continue to support Israel?",
            "side_yes": [
                "Yes, they are our strongest allies in the region",
                "Yes, and we should give equal support to Israel and Palestine",
                "Yes, and with more aid and support"
            ],
            "side_no": [
                "No, they are too influential on our politics",
                "No, not the current administration",
                "No, cut all support and aid"
            ]
        },
        {
            "route": "military_spending_stance",
            "name": "Military Spending",
            "icon": "https://d3ky08o2dntqg3.cloudfront.net/news/images/issues/300/284868183.jpg",
            "question": "Should the government increase military spending?",
            "side_yes": [
                "Yes, we don't want to be caught underfunded",
                "Yes, but only after our deficit is drastically reduced",
                "Yes, and increase military recruitment"
            ],
            "side_no": [
                "No, our military budget is too bloated anyway",
                "No, the United States should worry about domestic issues first",
                "No, and it should be decreased to allocate funds for other programs"
            ]
        }
        
        
    ],
    "candidates": [
        {
            "name": "Bernie Sanders",
            "url":"https://www.sanders.senate.gov",
            "img_url": "https://theunitedstates.io/images/congress/original/S000033.jpg",
            "political_positions": [
                {
                    "position_name": "Abortion",
                    "position_stance": "Pro-choice"
                },
                {
                    "position_name": "Border Wall",
                    "position_stance": "No, this would be too costly and ineffective"
                },
                {
                    "position_name": "Charter Schools",
                    "position_stance": "No, and education should not be privatized."
                },
                {
                    "position_name": "Climate Change",
                    "position_stance": "Yes, and provide more incentives for alternate energy production"
                },
                {
                    "position_name": "Gun Control",
                    "position_stance": "Yes, require strict background checks, psychological testing, and training"
                },
                {
                    "position_name": "Obamacare",
                    "position_stance": "Yes, but a mandatory single payer system would be even better"
                },
                {
                    "position_name": "Student Loans",
                    "position_stance": "Yes, and increase government funding so every student receives a free college education"
                },
                {
                    "position_name": "Marijuana",
                    "position_stance": "Yes, and immediately release anyone serving time solely for drug offenses"
                },
                {
                    "position_name": "Israel",
                    "position_stance": "Yes, and we should give equal support to Israel and Palestine"
                },
                {
                    "position_name": "Military Spending",
                    "position_stance": "No, and it should be decreased to allocate funds for other programs"
                }
            ]
        },
        {
            "name": "Joe Biden",
            "url":"https://www.bidenfoundation.org",
            "img_url": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Joe_Biden%2C_official_photo_portrait%2C_111th_Congress.jpg",
            "political_positions": [
                {
                    "position_name": "Abortion",
                    "position_stance": "Pro-choice"
                },
                {
                    "position_name": "Border Wall",
                    "position_stance": "No, this would be too costly and ineffective"
                },
                {
                    "position_name": "Charter Schools",
                    "position_stance": "No, they are ineffective"
                },
                {
                    "position_name": "Climate Change",
                    "position_stance": "Yes and quickly"
                },
                {
                    "position_name": "Gun Control",
                    "position_stance": "Yes, gun laws are too lax"
                },
                {
                    "position_name": "Obamacare",
                    "position_stance": "Yes, it was a step in the right direction"
                },
                {
                    "position_name": "Student Loans",
                    "position_stance": "Yes, but tuition needs regulated as well"
                },
                {
                    "position_name": "Marijuana",
                    "position_stance": "Yes, but only for medical use"
                },
                {
                    "position_name": "Israel",
                    "position_stance": "Yes, they are our strongest allies in the region"
                },
                {
                    "position_name": "Military Spending",
                    "position_stance": "Yes, we don't want to be caught underfunded"
                }
            ]
        },
        {
            "name": "Donald Trump",
            "url":"https://www.donaldjtrump.com/",
            "img_url": "https://www.whitehouse.gov/wp-content/uploads/2017/11/President-Trump-Official-Portrait.jpg",
            "political_positions": [
                {
                    "position_name": "Abortion",
                    "position_stance": "Pro-life, but allow in cases of rape, incest, or danger to the mother or child"
                },
                {
                    "position_name": "Border Wall",
                    "position_stance": "Yes, and Mexico should pay for it"
                },
                {
                    "position_name": "Charter Schools",
                    "position_stance": "Yes, and our entire education system should be privatized"
                },
                {
                    "position_name": "Climate Change",
                    "position_stance": "No, and global warming is a natural occurrence"
                },
                {
                    "position_name": "Gun Control",
                    "position_stance": "No, the second Amendment is there for a reason"
                },
                {
                    "position_name": "Obamacare",
                    "position_stance": "No, open the markets so insurers can compete across state lines and reduce costs"
                },
                {
                    "position_name": "Student Loans",
                    "position_stance": "No, loans are meant to be paid back",
                },
                {
                    "position_name": "Marijuana",
                    "position_stance": "Yes, but only for medical use"
                },
                {
                    "position_name": "Israel",
                    "position_stance": "Yes, they are our strongest allies in the region"
                },
                {
                    "position_name": "Military Spending",
                    "position_stance": "Yes, and increase military recruitment"
                }
            ]
        }
    ],
    "testperson": {
        "firstname":"Bill",
        "lastname":"Froyo",
        "streetname":"15 Crown St",
        "cityname":"Brooklyn",
        "state":"NY",
        "zipcode":"11225",
        "political_positions": [
            {
                "position_name":"Abortion",
                "position_stance":"Pro-choice, and providing birth control, sex education, and more social services will help reduce the number of abortions"
        }, {
            "position_name":"Border Wall",
            "position_stance":"Yes, but make it a high-tech surveillance barrier instead of a physical one"
        }, {
            "position_name":"Charter Schools",
            "position_stance":"No, and education should not be privatized."
        }, {
            "position_name":"Climate Change",
            "position_stance":"Yes, and provide more incentives for alternate energy production"
        }, {
            "position_name":"Gun Control",
            "position_stance":"Yes, gun laws are too lax"
        }, {
            "position_name":"Obamacare",
            "position_stance":"No, open the markets so insurers can compete across state lines and reduce costs"
        }, {
            "position_name":"Student Loans",
            "position_stance":"No, and transition all current government student loans into privately managed accounts"
        }, {
            "position_name":"Marijuana",
            "position_stance":"Yes, but only for medical use"
        }, {
            "position_name":"Israel",
            "position_stance":"Yes, and we should give equal support to Israel and Palestine"
        }, {
            "position_name": "Military Spending",
            "position_stance":"No, the United States should worry about domestic issues first"
        } ],
        "username":"billyboy@gmail.com"
    },
    "testing": "TEST TEST TEST TEST TEST TEST TEST"
}

export default pageData;