            if (t.weapsDirty = e.readBoolean(), t.weapsDirty) {
                t.curWeapIdx = e.readBits(2), t.weapons = [];
                for (var n = 0; n < x.WeaponSlot.Count; n++) {
                    var s = {};
                    s.type = e.readItemType(), s.ammo = e.readUint8(), t.weapons.push(s)
                }
            }
