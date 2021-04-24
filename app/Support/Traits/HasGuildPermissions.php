<?php

namespace App\Support\Traits;

use App\Models\Guild;

trait HasGuildPermissions
{
    /**
     * Get guild permissions
     *
     * @return string
     */
    public function getPermissions($guild_id = '')
    {
        $guild_id = $guild_id ?: Guild::current();
        return $this->guild_permissions[$guild_id] ?? [];
    }

    /**
     * Get guild permissions
     *
     * @return string
     */
    public function checkPermission($permissions, $guild_id = '')
    {
        $userPermission = $this->getPermissions($guild_id);

        $permissions = (array) $permissions;
        foreach ($permissions as $permission) {
            $flag = $this->permissionFlag($permission);

            if (($userPermission & $flag) == $flag) {
                continue;
            }

            return false;
        }

        return true;
    }

    /**
     * Bitwise permission flags
     *
     * @link https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags
     *
     * @return bitwise
     */
    private function permissionFlag($code)
    {
        $codes = [
            'CREATE_INSTANT_INVITE' => 0x000000001, // Allows creation of instant invites
            'KICK_MEMBERS'          => 0x000000002, // Allows kicking members
            'BAN_MEMBERS'           => 0x000000004, // Allows banning members
            'ADMINISTRATOR'         => 0x000000008, // Allows all permissions and bypasses channel permission overwrites
            'MANAGE_CHANNELS'       => 0x000000010, // Allows management and editing of channels
            'MANAGE_GUILD'          => 0x000000020, // Allows management and editing of the guild
            'ADD_REACTIONS'         => 0x000000040, // Allows for the addition of reactions to messages
            'VIEW_AUDIT_LOG'        => 0x000000080, // Allows for viewing of audit logs
            'PRIORITY_SPEAKER'      => 0x000000100, // Allows for using priority speaker in a voice channel
            'STREAM'                => 0x000000200, // Allows the user to go live
            'VIEW_CHANNEL'          => 0x000000400, // Allows guild members to view a channel, which includes reading messages in text channels
            'SEND_MESSAGES'         => 0x000000800, // Allows for sending messages in a channel
            'SEND_TTS_MESSAGES'     => 0x000001000, // Allows for sending of /tts messages
            'MANAGE_MESSAGES'       => 0x000002000, // Allows for deletion of other users messages
            'EMBED_LINKS'           => 0x000004000, // Links sent by users with this permission will be auto-embedded
            'ATTACH_FILES'          => 0x000008000, // Allows for uploading images and files
            'READ_MESSAGE_HISTORY'  => 0x000010000, // Allows for reading of message history
            'MENTION_EVERYONE'      => 0x000020000, // Allows for using the @everyone tag to notify all users in a channel, and the @here tag to notify all online users in a channel
            'USE_EXTERNAL_EMOJIS'   => 0x000040000, // Allows the usage of custom emojis from other servers
            'VIEW_GUILD_INSIGHTS'   => 0x000080000, // Allows for viewing guild insights
            'CONNECT'               => 0x000100000, // Allows for joining of a voice channel
            'SPEAK'                 => 0x000200000, // Allows for speaking in a voice channel
            'MUTE_MEMBERS'          => 0x000400000, // Allows for muting members in a voice channel
            'DEAFEN_MEMBERS'        => 0x000800000, // Allows for deafening of members in a voice channel
            'MOVE_MEMBERS'          => 0x001000000, // Allows for moving of members between voice channels
            'USE_VAD'               => 0x002000000, // Allows for using voice-activity-detection in a voice channel
            'CHANGE_NICKNAME'       => 0x004000000, // Allows for modification of own nickname
            'MANAGE_NICKNAMES'      => 0x008000000, // Allows for modification of other users nicknames
            'MANAGE_ROLES'          => 0x010000000, // Allows management and editing of roles
            'MANAGE_WEBHOOKS'       => 0x020000000, // Allows management and editing of webhooks
            'MANAGE_EMOJIS'         => 0x040000000, // Allows management and editing of emojis
            'USE_SLASH_COMMANDS'    => 0x080000000, // Allows members to use slash commands in text channels
            'REQUEST_TO_SPEAK'      => 0x100000000, // Allows for requesting to speak in stage channels
        ];

        return $codes[$code] ?? null;
    }
}
