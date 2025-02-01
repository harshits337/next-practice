import ProfileView from "@/app/components/profile/profile-view/ProfileView";

interface Params {
  id: string;
}

const sampleProfile = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    gender: "Male",
    dob: "1990-01-01",
    currentCompany: "Example Corp",
    currentRole: "Software Engineer",
    totalExperience: "5",
    title: "Senior Developer",
    about: "Passionate developer with experience in full-stack development.",
    username: "johndoe",
    skills: ["JavaScript", "React", "Node.js"],
    profilePic: "https://avatar.iran.liara.run/public/20",
    country: "USA",
    phoneNumber: "123-456-7890",
  };

export default async function MainThema({ params }: { params: Params }) {
    const {id} = params;
    console.log(id);
  
    return <div><ProfileView profile={sampleProfile}/></div>;
  }