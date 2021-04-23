const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    findallUsers: [userstructure]
    findallPayments: [userpayments]
    findall: [structure]
    findcourse(course_id: String): structure
    findallpaths: [pathstructure]
    findpath(course_id: String): pathstructure
    finduser: [userstructure]
    findallflashes: [flashesstructure]
    userdata(id: ID): userstructure
    me: ID
  }

  type Mutation {
    createUser(email: String!, password: String!, name: String!): Boolean!

    login(email: String!, password: String!): LoginResponse

    addinprogresscourseuser(
      id: ID
      course_id: String
      course_name1: String
      course_name2: String
      module: [usercoursemoduleinput]
    ): Boolean
    addcompletedcourseuser(id: ID): Boolean
    addinprogresspathuser(
      id: ID
      path_id: String
      path_title1: String
      path_title2: String
      courses: [userpathcourseinput]
    ): Boolean
    addcompletedpathuser(id: ID): Boolean
    changeuserprofileinfo(id: ID): Boolean
    changeuseraccountinfo(id: ID): Boolean
    addflash(
      flashes_no: String
      amount: String
      discount: [adddiscountstructure]
    ): Boolean
    addpath(
      path_title1: String!
      path_title2: String!
      difficulty: String!
      description: String!
      flashes: String!
      courses: [addpathcoursesstructure]
    ): Boolean
    addcourse(
      course_name1: String!
      course_name2: String!
      subtitle: String!
      description: String!
      photo: String!
      difficulty: String!
      flashes: String!
      overview: addoverview
      modules: [addmodules]
    ): Boolean
  }
  type LoginResponse {
    accessToken: String!
    userId: ID!
  }

  type userstructure {
    id: ID
    user_name: String
    name: String
    profession: String
    email: String
    flashes: String
    tokenVersion: Int
    badges: [userbadges]
    certificates: [usercertificates]
    courses: usercourses
    paths: userpaths
  }
  type userbadges {
    badge_name: String
    badge_image: String
  }
  type usercertificates {
    certificate_name: String
    certificate_image: String
  }
  type userpayments {
    email: String
    user_id: String
    invoice: String
    transaction_id: String
    amount: String
    time_stamp: String
    flashes: String
    discount_coupon: userpaymentsdiscount_coupon
  }
  type userpaymentsdiscount_coupon {
    discount_code: String
    discount: String
  }
  type userpaths {
    inprogress_paths: [userinprogresspaths]
    completed_paths: [usercompletedpaths]
  }

  type usercompletedpaths {
    path_id: String
    path_title1: String
    path_title2: String
    courses: [userpathcourses]
    certificate: String
  }

  type userinprogresspaths {
    path_id: String
    path_title1: String
    path_title2: String
    courses: [userpathcourses]
  }

  type userpathcourses {
    course_id: String
    course_name1: String
    flag: Int
  }

  type usercourses {
    inprogress_courses: [userinprogresscourses]
    completed_courses: [usercompletedcourses]
  }

  type usercompletedcourses {
    course_id: String
    course_name1: String
    course_name2: String
    module: [usercoursemodule]
    review: usercoursereview
  }

  type usercoursereview {
    stars: Int
    feedback: String
  }

  type userinprogresscourses {
    course_id: String
    course_name1: String
    course_name2: String
    module: [usercoursemodule]
  }

  type usercoursemodule {
    module_id: String
    module_name: String
    flag: Int
  }

  input userpathcourseinput {
    course_id: String
    course_name1: String
  }

  input usercoursemoduleinput {
    module_id: String
    module_name: String
    flag: Int
  }

  type pathstructure {
    id: String
    path_id: String
    path_title1: String
    path_title2: String
    difficulty: String
    description: String
    flashes: String
    courses: [pathcourses]
  }

  type pathcourses {
    course_id: String
    course_name1: String
  }

  type structure {
    id: ID!
    course_id: String
    course_name1: String
    course_name2: String
    photo: String
    subtitle: String
    description: String
    difficulty: String
    flashes: String
    overview: strucoverview

    modules: [strumod]
  }

  type strumod {
    module_id: String
    module_name: String
    module_video: String
    module_content: [strumodcont]
    module_questions: [strumodques]
  }

  type strumodcont {
    title: String
    description: [String]
    image: String
  }

  type strumodques {
    question: String
    answer: String
  }

  type strucoverview {
    sections: [String]
    coursedetailscontent: [strudetails]
  }

  type strudetails {
    title1: String
    title2: String
    content: [String]
  }
  type flashesstructure {
    id: ID
    flashes_no: String
    amount: String
    discount: [discountstructure]
  }
  type discountstructure {
    discount_coupon: String
    discount_percent: String
  }
  input adddiscountstructure {
    discount_coupon: String
    discount_percent: String
  }
  input addpathcoursesstructure {
    course_id: String!
    course_name: String!
  }
  input addoverview {
    sections: [String]
    coursedetailscontent: [adddetails]
  }
  input adddetails {
    title1: String
    title2: String
    content: [String]
  }
  input addmodules {
    module_name: String
    module_video: String
    module_content: [addmodcont]
    module_questions: [addmodques]
  }
  input addmodcont {
    title: String
    description: [String]
    image: String
  }

  input addmodques {
    question: String
    answer: String
    flashes: String
  }
`;
module.exports = { typeDefs };
