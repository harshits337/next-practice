'use client'
import ProfileView from "@/app/components/profile/profile-view/ProfileView";
import { useProfileHook } from "@/hooks/profile";
import { profile } from "console";
import { useRouter } from "next/navigation";

// interface Params {
//   id: string;
// }

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

// export default async function Page(props: { params: Promise<Params> }) {
//   const params = await props.params;
//   const {id} = params;
//   console.log(id);

//   return <div><ProfileView profile={sampleProfile}/></div>;
// }

export default  function Page() {

  const {profileDetails} = useProfileHook();
  const router = useRouter();

  if(profileDetails === false){
    router.push('/profile')
  }

  
  

  console.log("profileDetails", profileDetails);
  return ( <div><ProfileView profile={profileDetails || undefined}/></div>)
}
