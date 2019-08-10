            if (t.weapsDirty = e.readBoolean(), t.weapsDirty) {
                t.curWeapIdx = e.readBits(2), t.weapons = [];
                for (var n = 0; n < f.WeaponSlot.Count; n++) {
                    var s = {};
                    s.name = e.readGameType(), s.ammo = e.readUint8(), t.weapons.push(s)
                }
            }
