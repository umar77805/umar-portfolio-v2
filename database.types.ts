export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      about_page: {
        Row: {
          created_at: string
          elaborated_info: string[]
          id: number
          image: string | null
          section_name: string
        }
        Insert: {
          created_at?: string
          elaborated_info: string[]
          id?: number
          image?: string | null
          section_name: string
        }
        Update: {
          created_at?: string
          elaborated_info?: string[]
          id?: number
          image?: string | null
          section_name?: string
        }
        Relationships: []
      }
      about_sections: {
        Row: {
          id: string
          paragraphs: string[]
          title: string
        }
        Insert: {
          id?: string
          paragraphs: string[]
          title: string
        }
        Update: {
          id?: string
          paragraphs?: string[]
          title?: string
        }
        Relationships: []
      }
      contact: {
        Row: {
          alias: string | null
          connectable: boolean
          fk: string
          id: number
          name: string
          social_media: boolean
          target: string
        }
        Insert: {
          alias?: string | null
          connectable?: boolean
          fk: string
          id?: number
          name: string
          social_media?: boolean
          target: string
        }
        Update: {
          alias?: string | null
          connectable?: boolean
          fk?: string
          id?: number
          name?: string
          social_media?: boolean
          target?: string
        }
        Relationships: [
          {
            foreignKeyName: "Contact_fk_fkey"
            columns: ["fk"]
            isOneToOne: false
            referencedRelation: "globals"
            referencedColumns: ["id"]
          },
        ]
      }
      experience: {
        Row: {
          company: string
          description: string[]
          end_date: string | null
          id: string
          is_current: boolean
          start_date: string
          title: string
        }
        Insert: {
          company: string
          description: string[]
          end_date?: string | null
          id?: string
          is_current?: boolean
          start_date: string
          title: string
        }
        Update: {
          company?: string
          description?: string[]
          end_date?: string | null
          id?: string
          is_current?: boolean
          start_date?: string
          title?: string
        }
        Relationships: []
      }
      globals: {
        Row: {
          current_position: string | null
          final_statement: string | null
          footer_about: string | null
          id: string
          name: string
        }
        Insert: {
          current_position?: string | null
          final_statement?: string | null
          footer_about?: string | null
          id?: string
          name: string
        }
        Update: {
          current_position?: string | null
          final_statement?: string | null
          footer_about?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      hero: {
        Row: {
          company_logo: string | null
          id: string
          name: string
          profile_image: string | null
          subtitle: string
        }
        Insert: {
          company_logo?: string | null
          id?: string
          name: string
          profile_image?: string | null
          subtitle: string
        }
        Update: {
          company_logo?: string | null
          id?: string
          name?: string
          profile_image?: string | null
          subtitle?: string
        }
        Relationships: []
      }
      projects: {
        Row: {
          created_at: string
          description: string[]
          id: string
          image: string | null
          links: Json[] | null
          title: string
        }
        Insert: {
          created_at?: string
          description: string[]
          id?: string
          image?: string | null
          links?: Json[] | null
          title: string
        }
        Update: {
          created_at?: string
          description?: string[]
          id?: string
          image?: string | null
          links?: Json[] | null
          title?: string
        }
        Relationships: []
      }
      quote: {
        Row: {
          id: string
          text: string
        }
        Insert: {
          id?: string
          text: string
        }
        Update: {
          id?: string
          text?: string
        }
        Relationships: []
      }
      sections: {
        Row: {
          fk: string
          id: number
          name: string
          relevent_page: string
          target_id: string | null
        }
        Insert: {
          fk: string
          id?: number
          name: string
          relevent_page?: string
          target_id?: string | null
        }
        Update: {
          fk?: string
          id?: number
          name?: string
          relevent_page?: string
          target_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sections_fk_fkey"
            columns: ["fk"]
            isOneToOne: false
            referencedRelation: "globals"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
