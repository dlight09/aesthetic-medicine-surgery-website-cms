import { getSupabaseAdmin } from './supabase';

const actorRoles = ['admin', 'editor', 'reviewer', 'intake'] as const;

export type CmsActorRole = (typeof actorRoles)[number];

export type CmsActor = {
  id: string;
  display_name: string;
  role: CmsActorRole;
};

export async function getCmsActor(requiredRoles?: CmsActorRole[]): Promise<CmsActor> {
  const actorId = import.meta.env.CMS_ACTOR_ID?.trim();
  if (!actorId) throw new Error('CMS_ACTOR_ID is required for CMS writes');

  const { data, error } = await getSupabaseAdmin()
    .from('cms_actors')
    .select('id, display_name, role')
    .eq('id', actorId)
    .eq('active', true)
    .maybeSingle();

  if (error) throw error;
  if (!data || !actorRoles.includes(data.role as CmsActorRole)) {
    throw new Error('CMS_ACTOR_ID must identify an active CMS actor');
  }

  const actor = data as CmsActor;
  if (requiredRoles?.length && !requiredRoles.includes(actor.role)) {
    throw new Error('The configured CMS actor cannot perform this action');
  }
  return actor;
}
