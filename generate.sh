# generate usual openapi typescript types
pnpm exec openapi-typescript openapi.yaml -o types.ts --root-types --root-types-no-schema-prefix

file=$(cat types.ts)

# add our branded type import
cat > types.ts << EOF
import type { UUID as OurUUID } from './branded';
$(echo "$file")
EOF

# replace UUID definition with our branded type
file2=$(sed 's/UUID: string/UUID: OurUUID/' types.ts)

echo "$file2" > types.ts
