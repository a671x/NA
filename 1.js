        function s(e, t) {
            t.players = [];
            for (var a = e.readUint8(), i = 0; i < a; i++) {
                var r = {};
                r.hasData = e.readBoolean(), r.hasData && (r.pos = e.readVec(0, 0, 1024, 1024, 11), r.visible = e.readBoolean(), r.dead = e.readBoolean(), r.downed = e.readBoolean(), r.factionLeader = e.readBoolean()), t.players.push(r)
            }
            e.readAlignToNextByte()
        }
