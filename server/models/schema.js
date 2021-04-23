const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

let courseSchema = new mongoose.Schema(
  {
    course_id: String,
    course_name1: String,
    course_name2: String,
    photo: String,
    subtitle: String,
    description: String,
    difficulty: String,
    flashes: String,
    overview: {
      coursedetailscontent: [
        {
          title1: String,
          title2: String,
          content: [String],
        },
      ],
      sections: [String],
    },
    modules: [
      {
        module_id: String,
        module_name: String,
        module_video: String,
        module_content: [
          {
            title: String,
            description: [String],
            image: String,
          },
        ],
        module_questions: [
          {
            question: String,
            answer: String,
            flashes: String,
          },
        ],
      },
    ],
  },
  { collection: "courses" }
);

let pathSchema = new mongoose.Schema(
  {
    path_id: String,
    path_title1: String,
    path_title2: String,
    difficulty: String,
    description: String,
    flashes: String,
    courses: [
      {
        course_id: String,
        course_name: String,
      },
    ],
  },
  { collection: "paths" }
);

let userSchema = new mongoose.Schema({
  name: String,
  profession: String,
  email: String,
  password: String,
  profile_picture: String,
  flashes: {
    type: String,
    default: "10",
  },
  badges: [
    {
      badge_name: String,
      badge_image: String,
    },
  ],
  certificates: [
    {
      certificate_name: String,
      certificate_image: String,
    },
  ],
  tokenVersion: {
    type: Number,
    default: 0,
  },
  courses: {
    inprogress_courses: [
      {
        course_id: String,
        course_name1: String,
        course_name2: String,
        module: [
          {
            module_id: String,
            module_name: String,
            flag: Number,
          },
        ],
      },
    ],
    completed_courses: [
      {
        course_id: String,
        course_name1: String,
        course_name2: String,
        module: [
          {
            module_id: String,
            module_name: String,
            flag: Number,
          },
        ],
        review: {
          stars: Number,
          feedback: String,
        },
      },
    ],
  },
  paths: {
    inprogress_paths: [
      {
        path_id: String,
        path_title1: String,
        path_title2: String,
        courses: [
          {
            course_id: String,
            course_name1: String,
            flag: Number,
          },
        ],
      },
    ],
    completed_paths: [
      {
        path_id: String,
        path_title1: String,
        path_title2: String,
        courses: [
          {
            course_id: String,
            course_name1: String,
            flag: Number,
          },
        ],
        certificate: String,
      },
    ],
  },

  payments: [
    {
      invoice: String,
      transaction_id: String,
      amount: String,
      time_stamp: String,
      flashes: String,
      discount_coupon: {
        discount_code: String,
        discount: String,
      },
    },
  ],
});
let userPassword = new mongoose.Schema({
  email: String,
  user_id: String,
  invoice: String,
  transaction_id: String,
  amount: String,
  time_stamp: String,
  flashes: Number,
  discount_coupon: {
    discount_code: String,
    discount: String,
  },
});
let flashes = new mongoose.Schema({
  flashes_no: String,
  amount: String,
  discount: [
    {
      discount_coupon: String,
      discount_percent: String,
    },
  ],
});

var Users = mongoose.model("users", userSchema);
var Paths = mongoose.model("paths", pathSchema);
var Courses = mongoose.model("courses", courseSchema);
var Payments = mongoose.model("payments", userPassword);
var Flashes = mongoose.model("flashes", flashes);
module.exports = { Courses, Paths, Users, Payments, Flashes };
