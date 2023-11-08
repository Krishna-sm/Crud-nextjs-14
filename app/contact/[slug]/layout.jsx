
const ContactLayout = ({children}) => {
  return children
}

export default ContactLayout



// ?

export async function generateMetadata({params}){
    return {
        title:params?.slug.split("-").join(" ")
    }
}