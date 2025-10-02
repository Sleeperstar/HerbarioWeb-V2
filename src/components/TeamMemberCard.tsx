import Image from "next/image";

export type TeamMember = {
  name: string;
  role: string;
  faculty: string;
  imageUrl: string;
  laboratorio?: string;
  especialidad?: string;
  externalLink?: string;
};

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="card-botanical hover-lift p-6">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="relative w-28 h-28 rounded-full overflow-hidden ring-2 ring-[#ec973a]/60 shadow-md">
          {member.externalLink ? (
            <a href={member.externalLink} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <Image
                src={member.imageUrl}
                alt={member.name}
                fill
                sizes="112px"
                className="object-cover"
              />
            </a>
          ) : (
            <Image
              src={member.imageUrl}
              alt={member.name}
              fill
              sizes="112px"
              className="object-cover"
            />
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
          <p className="text-sm text-muted-foreground">{member.role}</p>
          <p className="text-xs text-muted-foreground/80">{member.faculty}</p>
          {member.laboratorio && (
            <p className="text-xs text-muted-foreground/80">Nombre del Laboratorio: {member.laboratorio}</p>
          )}
          {member.especialidad && (
            <p className="text-xs text-muted-foreground/80">Especialidad: {member.especialidad}</p>
          )}
        </div>
      </div>
    </div>
  );
}
