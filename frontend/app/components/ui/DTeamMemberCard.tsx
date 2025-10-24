import Card from "./Card";

export default function DTeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <Card padding={0}>
      <img
        src={member.image}
        alt={member.fullName}
        className="w-full aspect-[3/4] object-cover rounded-t-lg"
      />
      <div className="bg-neutral p-6 min-h-[320px] flex flex-col gap-4">
        <span>
          <h2 className="text-2xl font-bold text-black">{member.fullName}</h2>
          <p>{member.role}</p>
        </span>
        <p className="text-black leading-relaxed">{member.description}</p>
        <ul className="mt-auto">
          {member.phone && (
            <li className="text-black">
              <a href={`tel:${member.phone}`} className="hover:underline">
                {member.phone}
              </a>
            </li>
          )}
          {member.email && (
            <li className="text-black">
              <a href={`mailto:${member.email}`} className="hover:underline">
                {member.email}
              </a>
            </li>
          )}
        </ul>
      </div>
    </Card>
  );
}

export interface TeamMember {
  fullName: string;
  role: string;
  description: string;
  image: string;
  phone: string;
  email: string;
}
