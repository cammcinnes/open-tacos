import React from "react";
import { Link } from "gatsby";
import Card from "./ui/card";
import RouteTypeChips from "./ui/RouteTypeChips";
import RouteGradeChip from "./ui/RouteGradeChip";
import { sanitize_name } from "../js/utils";

function RandomRouteCard({ climb }) {
  if (!climb) return null;
  const { slug, pathTokens } = climb;
  const { type, route_name, safety, yds } = climb.frontmatter;

  return (
    <Link to={slug}>
      <Card>
        <div className="text-left">
          <h2 className="font-medium font-semigole font-sans text-base truncate">
            {route_name}
          </h2>
          <div className="italic truncate text-xs text-gray-600">
            {sanitize_name(pathTokens[pathTokens.length - 2])}
          </div>
          <div className="my-2">
            <RouteGradeChip yds={yds} safety={safety}></RouteGradeChip>
            <RouteTypeChips type={type}></RouteTypeChips>
          </div>
        </div>
      </Card>
    </Link>
  );
}

export default RandomRouteCard;