'use client'
import ProfileView from "@/app/components/profile/profile-view/ProfileView";
import ProfileForm from "@/app/components/profile/ProfileForm";
import { useProfileHook } from "@/hooks/profile";
import { useRouter } from "next/navigation";


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
  return ( <div><ProfileForm edit={true} profile={profileDetails || undefined}/></div>)
}
