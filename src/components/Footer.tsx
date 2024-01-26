import { MembersProps} from "../types/FooterTypes";

export default function Footer({memberDetails}:MembersProps){

          return(
                    <>
                    {
                              memberDetails.map(memberDet=>
                                        <p>{memberDet.memberName}</p>
                                        )
                    }
 
                    </>
          )
}