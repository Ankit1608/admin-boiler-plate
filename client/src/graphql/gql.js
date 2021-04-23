import { gql } from "@apollo/client";

const findallUsers = gql`
  query {
    findallUsers {
      id
      name
      user_name
      email
      tokenVersion
      badges {
        badge_name
        badge_image
      }
      certificates {
        certificate_name
        certificate_image
      }
    }
  }
`;
const findallPayments = gql`
  query {
    findallPayments {
      email
      transaction_id
      time_stamp
      amount
      flashes
      invoice
      discount_coupon {
        discount
      }
    }
  }
`;
const findall = gql`
  query {
    findall {
      id
      course_name1
      course_name2
      description
      difficulty
      subtitle
      flashes
      modules {
        module_id
        module_name
      }
    }
  }
`;
const findallpaths = gql`
  query {
    findallpaths {
      id
      path_id
      path_title1
      path_title2
      difficulty
      flashes
      courses {
        course_id
      }
    }
  }
`;

const findallflashes = gql`
  query {
    findallflashes {
      id
      flashes_no
      amount
      discount {
        discount_coupon
        discount_percent
      }
    }
  }
`;
const addflash = gql`
  mutation(
    $flashes_no: String!
    $amount: String!
    $discount: [adddiscountstructure]!
  ) {
    addflash(flashes_no: $flashes_no, amount: $amount, discount: $discount)
  }
`;
const addpath = gql`
  mutation(
    $path_title1: String!
    $path_title2: String!
    $difficulty: String!
    $description: String!
    $flashes: String!
    $courses: [addpathcoursesstructure]!
  ) {
    addpath(
      path_title1: $path_title1
      path_title2: $path_title2
      difficulty: $difficulty
      description: $description
      flashes: $flashes
      courses: $courses
    )
  }
`;

const addcourse = gql`
  mutation(
    $course_name1: String!
    $course_name2: String!
    $subtitle: String!
    $photo: String!
    $description: String!
    $difficulty: String!
    $flashes: String!
    $overview: addoverview
    $modules: [addmodules]
  ) {
    addcourse(
      course_name1: $course_name1
      course_name2: $course_name2
      subtitle: $subtitle
      photo: $photo
      description: $description
      difficulty: $difficulty
      flashes: $flashes
      overview: $overview
      modules: $modules
    )
  }
`;
export {
  findallUsers,
  findallPayments,
  findall,
  findallpaths,
  findallflashes,
  addflash,
  addpath,
  addcourse,
};
